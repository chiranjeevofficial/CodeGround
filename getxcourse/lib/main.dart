import 'package:flutter/material.dart';
import 'package:get/get.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Snackbar',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Snackbar'),
        ),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(
                  onPressed: () {
                    Get.snackbar(
                      'Snackbar Title',
                      'Snackbar Body',
                      snackPosition: SnackPosition.BOTTOM,
                      // titleText: const Text('Another Title'),
                      // messageText: const Text(
                      //   'Another Message',
                      //   style: TextStyle(
                      //     color: Colors.red,
                      //   ),
                      // ),
                      colorText: Colors.deepPurpleAccent,
                      backgroundColor: Colors.black,
                      borderRadius: 10,
                      margin: const EdgeInsets.all(10),
                    );
                  },
                  child: const Text('Show Snackbar'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
