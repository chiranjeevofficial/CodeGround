import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:policy_notifier/model/policy.dart';
import 'package:policy_notifier/screen/remove_page.dart';
import 'package:provider/provider.dart';

class Home extends StatelessWidget {
  const Home({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Policy Notifier'),
        elevation: 1,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          Container(
            padding: const EdgeInsets.all(10),
            child: Row(
              children: [
                Expanded(
                  child: Consumer<PolicyProvider>(
                    builder: (context, value, child) {
                      return const Text(
                        'Policies: ',
                        style: TextStyle(fontSize: 20),
                      );
                    },
                  ),
                ),
                Consumer<PolicyProvider>(
                  builder: (context, value, child) {
                    return Row(
                      children: [
                        PolicyValueWidget(text: '${value.totalPolicy}', color: Colors.green),
                        PolicyValueWidget(text: '${value.totalPolicy}', color: Colors.red),
                        PolicyValueWidget(text: '${value.totalPolicy}', color: Colors.red),
                      ],
                    );
                  },
                ),
              ],
            ),
          )
        ],
      ),
      drawer: Drawer(
        child: ListView(
          children: [
            const DrawerHeader(
              margin: EdgeInsets.zero,
              padding: EdgeInsets.zero,
              child: UserAccountsDrawerHeader(
                accountName: Text('username'),
                accountEmail: Text('user@mail.com'),
              ),
            ),
            ListTile(
              title: const Text('Delete Policy'),
              leading: const Icon(Icons.policy),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => (const SecondScreen()),
                  ),
                );
              },
            )
          ],
        ),
      ),
      floatingActionButton: Consumer<PolicyProvider>(
        builder: (context, value, child) {
          return FloatingActionButton(
            onPressed: () {
              value.setTotalPolicy(value.getTotalPolicy() + 1);
            },
            child: const Icon(Icons.plus_one),
          );
        },
      ),
    );
  }
}

class PolicyValueWidget extends StatelessWidget {
  const PolicyValueWidget({
    super.key,
    required this.text,
    this.color,
  });

  final String text;
  final Color? color;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 20,
      child: Text(
        text,
        style: TextStyle(
          fontSize: 20,
          fontWeight: FontWeight.bold,
          color: color ?? Colors.black,
        ),
      ),
    );
  }
}
