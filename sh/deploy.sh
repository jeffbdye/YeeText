#!/bin/bash
yeetext_now=`date +%Y-%m-%d--%H-%M-%S`
mkdir /var/www/yeetext.net/archive/$yeetext_now
mv /var/www/yeetext.net/public/* /var/www/yeetext.net/archive/$yeetext_now/public
mkdir /var/www/yeetext.net/public
cp /var/lib/jenkins/workspace/YeeText/public/* /var/www/yeetext.net/public
chgrp buildusers /var/www/yeetext.net/public
unset yeetext_now
