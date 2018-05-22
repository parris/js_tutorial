def hello_world()
  j = "hello world"
  puts "outer #{j}"

  inner = lambda do |j|
    puts "inner #{j}"
  end

  inner.call(j)
end

hello_world()
