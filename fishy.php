<?php
/*
Plugin Name: Whoa, Caviar!!
Description: A Mountain, A Stream, A Fish... potentailly caviar...
Version: 0.0.1
Author: Jaffe75
Author URI: jaff.es
License: A "Slug" license name e.g. GPL2
*/
/*  Copyright 2013  Jaffe  (email : jaffe75@gmail.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
 add_action( 'wp_enqueue_scripts', 'prefix_add_my_stylesheet' );
function prefix_add_my_stylesheet() {
    // Respects SSL, Style.css is relative to the current file
    wp_register_style( 'prefix-style', plugins_url('/css/global.css', __FILE__) );
    wp_enqueue_style( 'prefix-style' );
}

function my_fishscripts_method() {
    wp_enqueue_script(
        'newscript',
        plugins_url( '/js/script.js' , __FILE__ ),
        array( 'jquery' )
    );
}

add_action( 'wp_enqueue_scripts', 'my_fishscripts_method' );







?>