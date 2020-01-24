#!/bin/zsh

if [[ $1 == 'net' ]]; then
	sudo /etc/init.d/network-manager stop
	sudo /etc/init.d/networking stop
	sudo mv /etc/NetworkManager/system-connections/xfinitywifi* /etc/NetworkManager/
	macchanger -r -b wlo1
	macchanger -r -b eno1
	sudo /etc/init.d/network-manager start
	sudo /etc/init.d/networking start
elif [[ $1 == man ]]; then
		echo "Changing Mac for xfinitywifi....\n\n"
		sudo /etc/init.d/network-manager stop > /dev/null
		A=$(echo -n  B4:E4:E4; dd bs=1 count=3 if=/dev/random 2>/dev/null |hexdump -v -e '/1 ":%02X"')
		C='s/cloned.*$/cloned-mac-address='$A'/gi'
		sudo mv /etc/NetworkManager/xfinitywifi /etc/NetworkManager/system-connections/
		sudo sed -i $C /etc/NetworkManager/system-connections/xfinitywifi
		sudo /etc/init.d/network-manager start >/dev/null
		echo 'Mac for xfinitywifi changed to:'$A'\n\nStarting wifi....'
elif [[ $1 != ("net"|"man") ]]; then
	echo 'man: reset wifi config cloned address\nnet: reset network mac\n'
fi