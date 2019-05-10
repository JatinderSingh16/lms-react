<?php


 include('connection.php');

//  header('Access-Control-Allow-Origin: * ');
//  header('Access-Control-Allow-Headers: Content-Type');
//  header('Access-Control-Allow-Method: GET,POST,OPTIONS,DELETE,PUT');

 $json = file_get_contents('php://input');
     $obj=json_decode($json, true);

    
  if(isset($obj['post'])  && ($obj['post']=='yes') && ($obj['state']=='register')){


    $firstname=(isset($obj['firstname']) && $obj['firstname']) ? $obj['firstname']:'';
    $lastname=(isset($obj['lastname']) && $obj['lastname']) ? $obj['lastname']:'';
    $email=(isset($obj['email']) && $obj['email']) ? $obj['email']:'';
    $password=(isset($obj['password']) && $obj['password']) ? $obj['password']:'';
    $gender=(isset($obj['gender']) && $obj['gender']) ? $obj['gender']:'';
    $phone=(isset($obj['phone']) && $obj['phone']) ? $obj['phone']:'';
    $uid=(isset($obj['uid']) && $obj['uid']) ? $obj['uid']:'';
    $role=(isset($obj['role']) && $obj['role']) ? $obj['role']:'';



   $insert="insert into register (firstname,lastname,email,password,gender,phone,uid,role,approved) values('".$firstname."','".$lastname."','".$email."','".$password."','".$gender."','".$phone."','".$uid."','".$role."','no')";

     $result=mysqli_query($conn,$insert);

     if($result){

      echo json_encode(array("status" => 'true'));

     }else{

         echo json_encode(array("status" => 'false'));
     }
}else if (isset($obj['post'])  && ($obj['post']=='yes') && ($obj['state']=='login') ){

    
}





?>