<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" type="text/css">
    <title>Text Editor</title>
</head>
<body>
    <div class="box1">
        <button type="button" name="tombol" id="run1">Run</button>
        <p id="cp1">*This text editor with suport for live preview, if not working for you click Run </p>
        <div class="box2">
        <div class="tte" contenteditable="true" spellcheck="false"></div>
        <iframe class="hasil"></iframe>
    </div>
    <p id="cp"> Andi Almafhum &copy; <?=date("Y");?></p>
</div>
    
    <script src="script.js" type="text/javascript"></script>
</body>
</html>
