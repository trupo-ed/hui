function createTable()
{

var newElem=document.createElement("table");//создаём новый элемент страницы (TABLE)
newElem.border=1;//указывает толщину рамки таблицы

var newRow=newElem.insertRow(0);//добавляем строку в созданной таблице
var newCell = newRow.insertCell(0);//в созданной строке добавляем столбец
newCell.width="200";//указываем длину столбца равной 200 пикселей
newCell.align="center";//указываем позиционирование по центру
newCell.innerHTML="строка 1 столбец";//заполняем ячейку жирным текстом

var newCell = newRow.insertCell(-1);//добавляем ещё один столбец
newCell.width="400";//указываем длину столбца равной 400 пикселей
newCell.align="center";//указываем позиционирование по центру
newCell.innerText="строка 1 столбец 2";//заполняем ячейку текстом

var newRow=newElem.insertRow(1);//добавляем ещё одну строку в таблицу
var newCell = newRow.insertCell(0); //в созданной строке добавляем столбец
newCell.width="200";//указываем длину столбца равной 200 пикселей
newCell.align="center";//указываем позиционирование по центру

addText=document.createTextNode("<b>строка 2 столбец 1</b>");//генерируем текстовый узел
newCell.appendChild(addText);//созданный текстовый узел добавляем в ячейку

var newCell = newRow.insertCell(-1); //добавляем ещё один столбец
newCell.width="400";//указываем длину столбца равной 400 пикселей
newCell.align="center";//указываем позиционирование по центру
addElem=document.createElement("b");//создаём новый элемент страницы (B)
addText=document.createTextNode("строка 2 столбец 2");//генерируем текстовый узел
addElem.appendChild(addText);//созданный текстовый узел добавляем к новому элементу (addElem)
newCell.appendChild(addElem);//полученный узел (addElem) добавляем в ячейку

document.body.appendChild(newElem);//прописываем созданную таблицу на страницу
}

function ffs(){
    var newTable = document.createElement("table");
    for (var y = 0; y<=9; y++){
        var newRow = newTable.insertRow(y);
        for (var x = 0; x <=9; x++){
            var newCell = newRow.insertCell(x);
            var newCell = newRow.insertCell(x);

            if (y === 0 && x ===0){
                newCell.width = 40;
                newCell.height = 60;
            }
            else if (y===0 && x > 0){
                newCell.className = "yellow";
                newCell.innerHTML = x;
                newCell.width = 40;
                newCell.height = 60;                
            }
            else if (y > 0 && x===0){
                newCell.ClassName = "yellow";
                newCell.innerHTML = y;
            }
            else{
                newCell.innerHTML = y * x;
            }
        }
    }
    document.body.appendChild(newTable);
}