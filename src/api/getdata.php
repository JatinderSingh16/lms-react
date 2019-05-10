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


    $email=(isset($obj['email']) && $obj['email']) ? $obj['email']:'';
    $password=(isset($obj['password']) && $obj['password']) ? $obj['password']:'';
  
    $getUser="select *from register where email='".$email."'and password='".$password."'";

    $result=mysqli_query($conn,$getUser);


         $rows=mysqli_num_rows($result);
         
         if($rows>0){


          $user=array(); 
         $data=mysqli_fetch_assoc($result);
         $user['user_id']=$data['id'];
         $user['firstname']=$data['firstname'];
         $user['lastname']=$data['lastname'];
         $user['email']=$data['email'];
         $user['role']=$data['role'];


         print_r(array('user_data'=>$user,'status'=>true));
            
         }else{

            print_r(array('user_data'=>'','status'=>false));
         }
       
    
    
}





?>