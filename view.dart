import 'package:flutter/material.dart';

class FeatureView extends StatefulWidget {
  @override
  _FeatureViewState createState() => _FeatureViewState();
}

class _FeatureViewState extends State<FeatureView>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: Duration(milliseconds: 1200),
    )..forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  Widget animatedFeature(String text, int index) {
    return FadeTransition(
      opacity: Tween<double>(begin: 0, end: 1)
          .animate(CurvedAnimation(parent: _controller, curve: Interval(index * 0.2, 1.0, curve: Curves.easeOut))),
      child: SlideTransition(
        position: Tween<Offset>(begin: Offset(0, 0.2), end: Offset.zero)
            .animate(CurvedAnimation(parent: _controller, curve: Interval(index * 0.2, 1.0, curve: Curves.easeOut))),
        child: Card(
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Text(text, style: TextStyle(fontSize: 18)),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final featureList = ['Quản lý thú cưng', 'Hồ sơ sức khỏe', 'Nhắc lịch tiêm chủng'];

    return Column(
      children: List.generate(featureList.length, (index) => animatedFeature(featureList[index], index)),
    );
  }
}