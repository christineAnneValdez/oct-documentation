

The fastest way to get started:

```bash
composer setup
```

This command will:

1. Install PHP dependencies
2. Copy `.env.example` to `.env`
3. Generate application key
4. Run database migrations
5. Install Node dependencies
6. Build frontend assets

### 📙 Manual Setup

If you prefer to run steps individually:

1. **Clone the repository**

    ```bash
    git clone https://github.com/mct-net/oneclicktask.git
    cd oneclicktask
    ```

2. **Install PHP dependencies**

    ```bash
    composer install
    ```

3. **Install Node dependencies**

    ```bash
    pnpm install
    ```

4. **Environment configuration**

    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

5. **Database setup**

    For SQLite (default):

    ```bash
    touch database/database.sqlite
    php artisan migrate
    ```

    For MySQL/PostgreSQL, update your `.env` file:

    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=oct
    DB_USERNAME=root
    DB_PASSWORD=
    ```

    Then run migrations:

    ```bash
    php artisan migrate
    ```

6. **Seed database with example tasks (optional)**

    ```bash
    php artisan db:seed --class=TaskSeeder
    ```

7. **Build frontend assets**
    ```bash
    pnpm build
    ```
