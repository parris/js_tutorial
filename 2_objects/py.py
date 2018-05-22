class Greeter:
  def __init__(self, name):
    self.name = name;

  def get_name(self):
    return self.name;

  def hello_world(self):
    print("Hello %(name)s" % dict(name=self.name))

(Greeter("Mushroom")).hello_world()
