def hello():
  j = "Hello World"
  print "outer", j
  def inner():
    print "inner", j

  inner()

hello()
