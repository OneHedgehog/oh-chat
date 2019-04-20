# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  #TODO sudo npm install --no-bin-links
  config.vm.box =  "ubuntu/xenial64"


  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port
  config.vm.network "forwarded_port", guest: 80, host: 80
  config.vm.network "forwarded_port", guest: 5432 , host: 5432

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.vm.synced_folder "./", "/var/www/", type: "nfs", create: true

  config.vm.synced_folder "./nginx/", "/etc/nginx/conf.d/", type: "rsync",
      rsync__args: ["--include=file.conf"]
  #config.vm.synced_folder "./nginx/", "/etc/nginx/conf.d/", type: "rsync",
  #rsync__args: ["--include=default.conf"]
  #config.vm.synced_folder "./nginx/", "/etc/nginx/sites-available/", type: "rsync", rsync__args: ["--include=default"]

  #config.vm.provision "file", source: "./nginx/default", destination: "/etc/nginx/sites-available/default"
  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
     vb.memory = "4096"
     vb.customize ["modifyvm", :id, "--memory", "4096"]
     vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
  end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  config.vm.provision "shell", inline: <<-SHELL
     #sudo apt-get update && sudo apt-get upgrade
     #sudo apt-get install -y nginx
     #sudo apt-get install software-properties-common
     #sudo add-apt-repository ppa:ondrej/php
     #sudo apt-get update
     #sudo apt-get install php7.2-fpm
     #sudo apt-get install php7.2
     #sudo apt-get install php-pear php7.2-curl php7.2-dev php7.2-gd php7.2-mbstring php7.2-zip php7.2-mysql php7.2-xml git
     #cd ~
     #curl -sS https://getcomposer.org/installer -o composer-setup.php
     #sudo php composer-setup.php --install-dir=/var/www/ --filename=composer
     #php composer install
     #sudo apt-get install postgresql
     #sudo -u postgres psql

     #CREATE DATABASE oh_chat;
     #CREATE USER oh_chat WITH password 'oh_chat';
     #GRANT ALL ON DATABASE oh_chat TO oh_chat;
     #\q

     #--------------------------
     #sudo add-apt-repository ppa:ondrej/php
     #sudo apt update
     #sudo apt install nginx
     #sudo apt-get install php7.3-fpm php7.3-cli php7.3-mysql php7.3-gd php7.3-imagick php7.3-recode php7.3-tidy php7.3-xmlrpc php7.3-xml zip unzip php7.3-zip php7.3-curl php7.3-mbstring postgresql postgresql-contrib
     #cd /var/www/backend/
     #curl -sS https://getcomposer.org/installer -o composer-setup.php
     #sudo php composer-setup.php --install-dir=bin --filename=composer
     #sudo php composer.phar require symfony/translation
     #sudo php composer.phar install
   SHELL
end
