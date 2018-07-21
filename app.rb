require 'sinatra'
require_relative 'random_pair.rb'

enable :sessions

get '/' do
  names = session[:names] || []
  name_list = ''
  br = '<br>'
  names.compact!
  names.each do |v|
    unless v.is_a?(Array)
      name_list += v
    else
      v.compact!
      list = v.join(' ')
      name_list += list
    end
    name_list += br
  end
  erb :index, :layout => :layout, locals: {name_list: name_list}
end

post '/shuffle' do
  names = params[:names] || []
  session[:names] = pair(names)
  redirect '/'
end