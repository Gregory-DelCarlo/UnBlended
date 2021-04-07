@distilleries.each do |distillery|
    json.set! distillery.id do 
        json.partial! 'distillery', distillery: distillery
    end
end