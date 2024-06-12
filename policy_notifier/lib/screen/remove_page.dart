import 'package:flutter/material.dart';
import 'package:policy_notifier/model/policy.dart';
import 'package:provider/provider.dart';

class SecondScreen extends StatelessWidget {
  const SecondScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Second Screen'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Consumer<PolicyProvider>(
                  builder: (context, value, child) {
                    return Text(
                      'Total Policies: ${value.totalPolicy}',
                      style: const TextStyle(fontSize: 20),
                    );
                  },
                ),
              ],
            )
          ],
        ),
      ),
      floatingActionButton: Consumer<PolicyProvider>(
        builder: (context, value, child) {
          return FloatingActionButton(
            onPressed: () {
              value.setTotalPolicy(
                value.getTotalPolicy() >= 1
                    ? value.getTotalPolicy() - 1
                    : value.totalPolicy,
              );
            },
            child: const Icon(Icons.exposure_neg_1),
          );
        },
      ),
    );
  }
}
