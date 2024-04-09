main() {
  // print("Namaste Dart!");
  // String username = "Narayan";
  // print("Namaste ${username} in Dart Language.");
  // var x = num.parse("56.60");

  // // # Number Properties
  // // print("x value is ${x}");
  // // print("hashcode: ${x.hashCode}");
  // // print("isFinite: ${x.isFinite}");
  // // print("isInFinite: ${x.isInfinite}");
  // // print("isNan: ${x.isNaN}");
  // // print("isNegative: ${x.isNegative}");
  // // print("sign: ${x.sign}");
  // // print("isEven: ${x.isOdd}");
  // // print("isOdd: ${x.isOdd}");

  // // # Number Functions
  // /// abs()	It gives the absolute value of the given number.
  // /// ceil()  It gives the ceiling value of the given number.
  // /// floor() It gives the floor value of the given number.
  // /// compareTo()	It compares the value with other number.
  // /// remainder()	It gives the truncated remainder after dividing the two numbers.
  // /// round()	It returns the round of the number.
  // /// toDouble()	It gives the double equivalent representation of the number.
  // /// toInt()	Returns the integer equivalent representation of the number.
  // /// toString()	Returns the String equivalent representation of the number
  // /// truncate()	Returns the integer after discarding fraction digits.
  // var str1 = "Namaste ";
  // var str2 = "Narayan!";
  // print("String Concatination: ${str1 + str2}\nstr2.length()");
  // var numLst = [1, 2, 4, 5, 3];
  // // for (int i = 0; i < numLst.length; i++) print(numLst[i]);
  // numLst.forEach((element) {
  //   print(element);
  // });
  // var chiranjeevi = <String>{'Aswathama', 'Bali', 'Ved Vyas', 'Hanuman'};
  // var otherChiranjeevi = <String>{
  //   'Vibhishan',
  //   'Kripacharya',
  //   'Parshuram',
  //   'Markandey'
  // };
  // chiranjeevi.addAll(otherChiranjeevi);
  // print(chiranjeevi);

  // // var check = "Markandey";
  // // if (chiranjeevi.contains(check)) {
  // //   print("${check} found & its remove\nAfter Remove: ");
  // //   chiranjeevi.remove(check);
  // //   print(chiranjeevi);
  // // } else {
  // //   print("${check} not found");
  // // }
  // // print("${chiranjeevi}\nAfter Clear");
  // // chiranjeevi.clear();
  // // print(chiranjeevi);

  // List<String> chiranjeeviList = chiranjeevi.toList();
  // print(chiranjeeviList);
  var set1 = <int>{1, 3, 5, 7, 9};
  var set2 = <int>{0, 2, 4, 6, 8};
  var set3 = <int>{1, 2, 3, 5, 7};
  print("Demonstration of Set Operation");
  print(
      "set set1 union set2 is: ${set1.union(set2)}"); //{1, 3, 5, 7, 9, 2, 0, 4, 6, 8}
  print("set set1 intersection set2 is: ${set1.intersection(set2)}"); //{}
  print(
      "set set2 difference set3 is: ${set2.difference(set3)}"); //{1, 3, 5, 7, 9}

  // # Map (key : value)
  var student = {'name': 'Chiranjeev', 'age': 22};
  student['course'] = 'BCA';
  print(student);
}
