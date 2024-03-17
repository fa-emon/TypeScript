// enum: store only constant.Duplicate value isn't allowed here.
// enum type: numeric, string, heterogenous
// numeric enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
//string enum
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
//heterogenous
var heterogenous;
(function (heterogenous) {
    heterogenous[heterogenous["NO"] = 0] = "NO";
    heterogenous["Yes"] = "Yes";
})(heterogenous || (heterogenous = {}));
console.log(heterogenous);
