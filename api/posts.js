module.exports = (req, res) => {
  if (req.method == "GET") {
    res.json({
      "buff_bunny": [{"content":"Buff Bunny"},{"content":"The Buff Bunny Fitness Way"},{"content":"Welcome to Buff Bunny Fitness! We are a boutique fitness studio that offers high-energy group training and indoor cycling classes. Our mission is to provide a fun and supportive atmosphere where you can push yourself to reach your fitness goals. Our experienced instructors will lead you through challenging workouts that are tailored to your needs and fitness level. Whether you&apos;re a beginner or an advanced athlete, we have something for everyone at Buff Bunny Fitness. Our group training classes offer a variety of workouts that will keep you motivated and engaged, and our indoor cycling classes will give you a full-body workout that is guaranteed to get your heart rate up. So come join us at Buff Bunny Fitness and get ready to get fit!"},{"content":"Come ride, lift, sweat and train with us"},{"content":"Book a class now"}]
    })
  }
}