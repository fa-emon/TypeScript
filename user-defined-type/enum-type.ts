// enum: store only constant.Duplicate value isn't allowed here.
// enum type: numeric, string, heterogenous

// numeric enum
enum Direction{
    Up,
    Down,
    Left,
    Right
}
console.log(Direction);

//string enum
enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  console.log(Direction2);

  //heterogenous
  enum heterogenous{
    NO = 0,
    Yes = 'Yes'
  }
  console.log(heterogenous);