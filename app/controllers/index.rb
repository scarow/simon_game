get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do

  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)


content_type :JSON 
  { color: color, value: cell }.to_json

end

