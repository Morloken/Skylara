from flask import Flask, request, render_template, redirect, url_for, flash
import database

app = Flask(__name__)
app.secret_key = 'qwerty'  # додайте секретний ключ для використання flash повідомлень

# Ініціалізація бази даних
database.init_db()


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']

        # Перевірка на порожні поля
        if not username or not password or not email:
            flash('All fields are required!', 'error')
            return render_template('register.html')

        database.register_user(username, password, email)
        flash('Registration successful!', 'success')
        return redirect(url_for('index'))

    return render_template('register.html')


@app.route('/orders/<int:user_id>')
def user_orders(user_id):
    orders = database.get_user_orders(user_id)
    return render_template('orders.html', orders=orders)


@app.route('/create_order', methods=['GET', 'POST'])
def create_order():
    if request.method == 'POST':
        user_id = request.form['user_id']
        flight_number = request.form['flight_number']
        departure = request.form['departure']
        arrival = request.form['arrival']

        # Перевірка на порожні поля
        if not user_id or not flight_number or not departure or not arrival:
            flash('All fields are required!', 'error')
            return render_template('create_order.html')

        database.create_order(user_id, flight_number, departure, arrival)
        flash('Order created successfully!', 'success')
        return redirect(url_for('index'))

    return render_template('create_order.html')


if __name__ == '__main__':
    app.run(debug=True)
