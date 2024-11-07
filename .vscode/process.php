
    <title>Kết quả</title>
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $num1 = floatval($_POST['num1']);
        $num2 = floatval($_POST['num2']);

        if ($num1 < $num2) {
            $start = ceil($num1);
            $end = floor($num2);
        } else {
            $start = ceil($num2);
            $end = floor($num1);
        }

        echo "<h3>Các số nguyên giữa $num1 và $num2:</h3><ul>";
        for ($i = $start; $i <= $end; $i++) {
            echo "<li>$i</li>";
        }
        echo "</ul>";
    }
    ?>
</body>