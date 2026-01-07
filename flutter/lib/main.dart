import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: GoodMorningPage(),
    );
  }
}

class GoodMorningPage extends StatefulWidget {
  @override
  _GoodMorningPageState createState() => _GoodMorningPageState();
}

class _GoodMorningPageState extends State<GoodMorningPage> {
  final nameController = TextEditingController();
  final phoneController = TextEditingController();
  final emailController = TextEditingController();

  submitData() async {
    await http.post(
      Uri.parse("http://10.0.2.2:5000/api/users"),
      headers: {"Content-Type": "application/json"},
      body: jsonEncode({
        "name": nameController.text,
        "phone": phoneController.text,
        "email": emailController.text,
      }),
    );

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text("Good Morning! Data Submitted")),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Good Morning")),
      body: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(
              controller: nameController,
              decoration: InputDecoration(labelText: "Name"),
            ),
            TextField(
              controller: phoneController,
              decoration: InputDecoration(labelText: "Phone"),
            ),
            TextField(
              controller: emailController,
              decoration: InputDecoration(labelText: "Email"),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: submitData,
              child: Text("Submit"),
            ),
          ],
        ),
      ),
    );
  }
}