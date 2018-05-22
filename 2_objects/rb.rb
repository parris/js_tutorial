class Greeter
  def initialize(name)
    @name = name;
  end

  def get_name()
    @name;
  end

  def hello_world()
    puts "Hello #{@name}"
  end
end

Greeter.new("Mushroom").hello_world()
