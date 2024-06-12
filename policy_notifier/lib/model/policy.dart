import 'package:flutter/material.dart';

class PolicyProvider extends ChangeNotifier {
  late String policyName, ownerName;
  late DateTime fromDate, toDate;
  late int totalPolicy = 0;

  void setTotalPolicy(int totalPolicy) {
    this.totalPolicy = totalPolicy;
    notifyListeners();
  }

  int getTotalPolicy() {
    return totalPolicy;
  }
}
