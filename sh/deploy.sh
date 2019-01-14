#!/bin/bash
yeetext_now=`date +%Y-%m-%d--%H-%M-%S`
mkdir /var/www/yeetext.net/archive/$yeetext_now
mv /var/www/yeetext.net/public /var/www/yeetext.net/archive/$yeetext_now
cp /var/lib/jenkins/workspace/YeeText/public/* /var/www/yeetext.net/public/
unset yeetext_now
