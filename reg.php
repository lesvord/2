<?php
// Подключение к базе данных
$dbhost = 'localhost';
$dbuser = 'username';
$dbpass = 'password';
$dbname = 'database';
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// Обработка данных из формы
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

// Защита от SQL-инъекций
$username = mysqli_real_escape_string($conn, $username);
$password = mysqli_real_escape_string($conn, $password);
$email = mysqli_real_escape_string($conn, $email);

// Хэширование пароля
$password = password_hash($password, PASSWORD_DEFAULT);

// Добавление данных в базу данных
$sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";
if(mysqli_query($conn, $sql)){
    echo "Регистрация прошла успешно.";
} else{
    echo "Ошибка: " . mysqli_error($conn);
}

// Закрытие соединения с базой данных
mysqli_close($conn);
?>
