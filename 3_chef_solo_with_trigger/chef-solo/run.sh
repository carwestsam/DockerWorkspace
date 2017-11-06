#!/bin/bash

cd /home
chef-solo -c /home/solo.rb -o "recipe[mt::default]" 

