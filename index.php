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

  <!-- 📰 Danh sách bài viết -->
  <section>
    <h2 class="text-xl font-semibold text-indigo-400 mb-4">📰 Bài viết mới</h2>
    <?php
      $posts = get_posts(['numberposts' => 5]);
      foreach ($posts as $post) :
    ?>
      <article class="mb-6">
        <h3 class="text-lg font-bold text-purple-300 hover:underline">
          <a href="<?php echo get_permalink($post); ?>"><?php echo esc_html($post->post_title); ?></a>
        </h3>
        <p class="text-sm text-gray-400"><?php echo get_the_date('', $post); ?> · <?php echo get_the_author_meta('display_name', $post->post_author); ?></p>
      </article>
    <?php endforeach; ?>
  </section>

</main>

<?php get_footer(); ?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title><?php bloginfo( 'name' ); ?></title>
  <script src="https://cdn.tailwindcss.com"></script>
  <?php wp_head(); ?>
</head>
<body <?php body_class('bg-gray-950 text-gray-100 font-mono'); ?>>

  <header class="bg-gradient-to-r from-purple-700 via-indigo-800 to-gray-900 py-6 shadow-lg">
    <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-white"><?php bloginfo( 'name' ); ?></h1>
      <nav class="space-x-4 text-sm">
        <?php wp_nav_menu([
          'theme_location' => 'primary',
          'container' => false,
          'items_wrap' => '%3$s',
          'fallback_cb' => false,
          'depth' => 1,
        ]); ?>
      </nav>
    </div>
  </header>

  <main class="max-w-5xl mx-auto px-6 py-10 space-y-10">

    <!-- 📄 Pages List -->
    <section>
      <h2 class="text-xl font-semibold text-purple-400 mb-4">📑 Danh sách Trang</h2>
      <ul class="space-y-2">
        <?php
          $pages = get_pages();
          foreach ( $pages as $page ) {
            echo '<li><a href="' . get_page_link( $page->ID ) . '" class="text-blue-400 hover:underline">🔗 ' . esc_html($page->post_title) . '</a></li>';
          }
        ?>
      </ul>
    </section>

    <!-- 📰 Posts -->
    <section>
      <h2 class="text-xl font-semibold text-indigo-400 mb-4">📰 Tin tức & Bài viết</h2>
      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <article class="mb-6">
          <h3 class="text-lg font-bold text-white hover:text-purple-300">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
          </h3>
          <p class="text-sm text-gray-400"><?php echo get_the_date(); ?> · <?php the_author(); ?></p>
          <div class="mt-2 text-gray-200"><?php the_excerpt(); ?></div>
        </article>
      <?php endwhile; else: ?>
        <p class="text-gray-400">Không có bài viết nào.</p>
      <?php endif; ?>
    </section>

    <!-- 🐾 PetGen Form -->
    <section class="bg-gray-900 p-6 rounded shadow">
      <h2 class="text-xl font-semibold text-purple-400 mb-4">🐾 Đăng ký PetGen Guild</h2>
      <form method="POST" action="<?php echo esc_url( admin_url('admin-post.php') ); ?>" class="space-y-4">
        <input type="hidden" name="action" value="petgen_guild_signup" />
        <input type="text" name="petgen_name" placeholder="Tên bạn / CustomID" required
          class="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white" />
        <input type="email" name="petgen_email" placeholder="Email liên hệ" required
          class="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white" />
        <textarea name="petgen_message" placeholder="Lời nhắn gửi Boss Quang" required
          class="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white h-32 resize-none"></textarea>
        <button type="submit"
          class="w-full bg-purple-600 hover:bg-purple-500 py-2 px-4 rounded font-semibold">
          📬 Gửi đơn đăng ký
        </button>
      </form>
    </section>

  </main>

  <footer class="text-center text-gray-500 text-xs py-6">
    © <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?> · Powered by PetGen
  </footer>

  <?php wp_footer(); ?>
</body>
</html>