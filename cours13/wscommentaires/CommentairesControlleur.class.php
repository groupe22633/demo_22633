<?php
/**
 * Class CommentairesControlleur
 * Controleur de la ressource "Commentaires"
 * 
 * @author Jonathan Martel
 * @version 0.1.0
 * @update 2022-10-25
 * @license MIT
 */

  
class CommentairesControlleur 
{
	private $retour = array();

	/**
	 * Méthode qui gère les action en GET
     * Route : /commentaires/id_oeuvre - Liste des commentaires pour une oeuvre
	 *  
	 * @param Requete $requete
	 * @return Array Données retournées
     * 
	 */
	public function getAction(Requete $requete)
	{
		var_dump($requete);
        if(isset($requete->url_elements[0]))
        { 
			if(is_string($requete->url_elements[0]))	// Normalement l'id de l'oeuvre 
		    {                
                $id = $requete->url_elements[0];
                
                if(isset($requete->url_elements[1]) && $requete->url_elements[1] == "effacer")	// Normalement l'action (effacer)
                {
                    $this->retour = $this->effacerCommentaire($id);
                }
                else
                {
                    $this->retour = $this->getListeCommentaires($id);
                }
            }
            else if ($requete->url_elements[0] == "effacerTout")
            {
                $this->retour = $this->effacerTout();
            }
            else
            {
                $this->retour['erreur'] = $this->erreur(400);
			    
            }
		}
        else
        {
			$this->retour['erreur'] = $this->erreur(400);
			
		}
        return $this->retour;		
		
	}
	
	/**
	 * Méthode qui gère les action en POST
     * Route : /commentaires/id_oeuvre - Ajouter un commentaire
     * 
	 * @param Requete $requete
	 * @return Array Données retournées
	 */
	public function postAction(Requete $requete)	// Modification
	{
		if(isset($requete->url_elements[0]) && is_numeric($requete->url_elements[0]))	// Normalement l'id de la biere 
		{
			$id = (int)$requete->url_elements[0];
			
			$this->retour = $this->ajouterCommentaire($id, $requete->parametres);
			
		}
		else{
			$this->retour['erreur'] = $this->erreur(400);
			unset($this->retour);
		}
		
		return $this->retour;
	}
	
	/**
	 * Retourne les commentaires sur un élément
	 * @return Array Les commentaires
	 * @access private
	 */	
	private function getListeCommentaires($id)
	{
		$res = Array();
		$oCommentaire = new Commentaires();
		$res = $oCommentaire->lire($id);
		
		return $res; 
	}

	/**
	 * Ajouter un commentaire 
	 * @param Number id de l'oeuvre
	 * @param Array Les informations du commentaire
	 * @return int Identifiant du commentaire
	 * @access private
	 */	
	private function ajouterCommentaire($id, $data)
	{
		$res = Array();
		$oCommentaire = new Commentaires();
		if($oCommentaire->ajouter($id, $data))
        {
            $res = $data;
        }

		return $res; 
	}

/**
	 * Efface les commentaires sur un élément
	 * @return Bool 
	 * @access private
	 */	
	private function effacerCommentaire($id)
	{
		$res = Array();
		$oCommentaire = new Commentaires();
		$res = $oCommentaire->effacer($id);
		
		return $res; 
	}

    /**
	 * Efface tous les commentaires
	 * @return Bool
	 * @access private
	 */	
	private function effacerTout()
	{
		$res = Array();
		$oCommentaire = new Commentaires();
        var_dump($oCommentaire);
		$res = $oCommentaire->effacerTout();
		
		return $res; 
	}

	
	private function erreur($code, $data="")
	{
		//header('HTTP/1.1 400 Bad Request');
		http_response_code($code);

		return array("message"=>"Erreur de requete", "code"=>$code);
		
	}

}
