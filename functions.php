<?php
// index.php for PetGen WordPress theme
<?php get_header(); ?>

<main class="max-w-5xl mx-auto px-6 py-10 font-mono text-gray-100 space-y-10">
  
  <!-- ✅ Nội dung PageLayer hoặc nội dung chính của page -->
  <?php
    if ( have_posts() ) {
      while ( have_posts() ) {
        the_post();
        the_content(); // Cho phép PageLayer render content
      }
    }
    <?php
// 📌 Kích hoạt chức năng cơ bản
add_theme_support('title-tag');
add_theme_support('post-thumbnails');
register_nav_menus([
  'primary' => __('Primary Menu', 'petgen-cipher'),
]);

// 🐾 Xử lý form đăng ký PetGen Guild
add_action('admin_post_petgen_guild_signup', 'handle_petgen_signup');
add_action('admin_post_nopriv_petgen_guild_signup', 'handle_petgen_signup');

function handle_petgen_signup() {
  $name = sanitize_text_field($_POST['petgen_name'] ?? '');
  $email = sanitize_email($_POST['petgen_email'] ?? '');
  $message = sanitize_textarea_field($_POST['petgen_message'] ?? '');

  $log = date('c') . " | signup | $name | $email | $message\n";
  if (!file_exists(__DIR__ . '/logs')) mkdir(__DIR__ . '/logs');
  file_put_contents(__DIR__ . '/logs/payment.log', $log, FILE_APPEND);

  wp_mail('admin@petgen.rf.gd', 'Đăng ký mới từ PetGen Guild', "Tên: $name\nEmail: $email\nLời nhắn:\n$message");

  wp_redirect(home_url('/thank-you'));
  exit;
}
add_action('admin_post_petgen_guild_signup', 'handle_petgen_signup');
add_action('admin_post_nopriv_petgen_guild_signup', 'handle_petgen_signup');

function handle_petgen_signup() {
  $name = sanitize_text_field($_POST['petgen_name']);
  $email = sanitize_email($_POST['petgen_email']);
  $message = sanitize_textarea_field($_POST['petgen_message']);

  $log = date('c') . " | signup | $name | $email | $message\n";
  file_put_contents(__DIR__ . '/logs/payment.log', $log, FILE_APPEND);

  wp_mail('admin@petgen.rf.gd', 'PetGen Guild đăng ký mới', "Tên: $name\nEmail: $email\nLời nhắn:\n$message");

  wp_redirect(home_url('/thank-you'));
  exit;
}
  ?>