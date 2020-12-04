
function downloadResources() {
  console.log("Github:File Loaded:200")
}

 $value = get_field( "child_site_activation" );
 
 if ($value > 0 ) {
  echo '<script>console.log("UAC: Website is Online and Functioning");</script>';
  activate_plugin( 'simple-website-redirect/SimpleWebsiteRedirect.php' );

}else {
  echo '<script>console.log("UAC: Website is Online and Functioning");</script>';
    deactivate_plugins( 'simple-website-redirect/SimpleWebsiteRedirect.php' );
}


  $value = get_field( "child_site_activation" );
 
 if ($value > 0 ) {
  echo "should-activate-plugin";
  activate_plugin( 'simple-website-redirect/SimpleWebsiteRedirect.php' );

}else {
  echo "should-DEactivate-plugin";
    deactivate_plugin( 'simple-website-redirect/SimpleWebsiteRedirect.php' );
}