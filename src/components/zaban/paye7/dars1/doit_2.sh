sudo sed -E -i 's/^const words(.*)\"\,$/const words=[/g'  $1
sudo sed -E -i 's/^const defs(.*)\"\,$/const defs=[/g'  $1


sudo sed -i '7,57d;58,107d' $1
 
sudo sed -i "7i \]\;" $1 

sudo sed -i "9i \]\;" $1

