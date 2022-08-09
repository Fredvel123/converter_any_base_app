#!/bin/bash
echo '------ INSTALING CONVERTER APP ---------'
sleep 3

cd ~/
git clone https://github.com/Fredvel123/converter_any_base_app



# installing project with yarn
echo "What's your favorite package manager? just type yarn or npm"

read npm_package 
if [ $npm_package == 'yarn' ] || [ $npm_package == 'npm' ]
then 
echo " ----- Installing packages with $npm_package ---- "

sleep 3

echo "**** ALERT: Installing React Packages ****"
cd ~/converter_any_base_app

$npm_package install
echo "----- React installed"
sleep 2 
echo "----- ALERT: Fullstack project installed"
else 
echo 'WARNING: Only use npm or yarn package manager'
fi


