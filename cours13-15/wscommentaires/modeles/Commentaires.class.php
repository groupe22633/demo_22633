<?php
/**
 * Class Modele
 * Les modèles doivent hérités de cette classe.
 * 
 * @author Jonathan Martel
 * @version 1.0
 * @update 2013-12-11
 * @license MIT
 * 
 */
class Commentaires extends Modele{
	const TABLE_COMMENTAIRE = "commentaire";
    
	
	function lire($id){
		$res = Array();
		$stmt = $this->_db->prepare("select * from ".self::TABLE_COMMENTAIRE. " where id_element= ?");
        $stmt->bind_param("s", $id);
        if($stmt->execute())
        {
            if($mrResultat = $stmt->get_result())
            {
                $res = $mrResultat->fetch_all(MYSQLI_ASSOC);
            }
        }
		
		return $res;
	}

	function ajouter($id, $data){
		$res = false;
        if(extract($data) > 0)
		{
			//$image = $image || "";	
            $stmt = $this->_db->prepare("INSERT INTO ".self::TABLE_COMMENTAIRE. " (id_element, nom, prenom, courriel, pays, etat,ville, commentaire) VALUES (?,?,?,?,?,?,?,?)");
            $stmt->bind_param("ssssssss", $id, $nom, $prenom, $courriel, $pays, $etat, $ville, $commentaire);
            $stmt->execute();
            if($stmt->insert_id)
            {
                $res = true;
            }
			
		}
				
		return ( $res ? $stmt->insert_id : 0);
	}

	/**
	 * Requise seulement pour le développement de l'application
	 */
	function effacerTout(){
        $query = "TRUNCATE TABLE ".self::TABLE_COMMENTAIRE;
        echo $query;
        return $mrResultat = $this->_db->query($query);
	}

    /**
	 * Requise seulement pour le développement de l'application
	 */

    function effacer($id){
		$res = false;
		$stmt = $this->_db->prepare("delete * from ".self::TABLE_COMMENTAIRE. " where id_element= ?");
        $stmt->bind_param("s", $id);
        if($stmt->execute())
        {
            $res = $stmt->get_result();
            
        }
		return $res;
	}
    
}




?>