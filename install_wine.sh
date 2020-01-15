#!/usr/bin/env bash
# Install wine on Ubuntu 19.10


# Enable 32 bits support
sudo dpkg --add-architecture i386

# Grab and install the repository key via
wget -nc https://dl.winehq.org/wine-builds/winehq.key && sudo apt-key add winehq.key

# Add Wine repository for Ubuntu 19.10:
sudo apt-add-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ eoan main'

# Run command to add the third-party PPA
sudo add-apt-repository ppa:cybermax-dexter/sdl2-backport

# Run command to install Wine 4.21, 
# which will automatically install the required libfaudio0 libraries.
sudo apt install --install-recommends winehq-devel -y