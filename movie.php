<?php
// Kết nối đến cơ sở dữ liệu
$servername = "localhost";
$username = "root"; // Thay username bằng tên người dùng cơ sở dữ liệu
$password = ""; // Thay password bằng mật khẩu của người dùng cơ sở dữ liệu
$dbname = "netflix"; // Thay myDB bằng tên cơ sở dữ liệu

// Tạo kết nối đến cơ sở dữ liệu
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Truy vấn dữ liệu từ cơ sở dữ liệu
$sql = "SELECT * FROM movies";
$result = $conn->query($sql);

// Tạo một mảng để lưu trữ kết quả
$movies = array();

// Lặp qua kết quả và thêm vào mảng
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $movies[] = $row;
    }
}

// Trả về dữ liệu dưới dạng JSON
header('Content-Type: application/json');
echo json_encode($movies);

// Đóng kết nối đến cơ sở dữ liệu
$conn->close();
?>
