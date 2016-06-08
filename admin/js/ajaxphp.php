<?php
function update_page() {
  global $wpdb;
  $sql = "SELECT * FROM 'wp_ab_staff' ORDER BY id;";
  $results = $wpdb->get_results($sql);
  echo "Parsed results go here"+$results;
}
update_page();
?>
