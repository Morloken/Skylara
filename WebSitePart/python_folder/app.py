from flask import Flask, request, render_template, redirect, url_for, flash
import database

app = Flask(__name__)
app.secret_key = 'qwerty'

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

        if not username or not password or not email:
            flash('All fields are required!', 'error')
            return render_template('register.html')

        if database.find_user_by_username(username):
            flash('Username already exists!', 'error')
            return render_template('register.html')

        database.register_user(username, password, email)
        flash('Registration successful!', 'success')
        return redirect(url_for('index'))

    return render_template('register.html')


@app.route('/orders/<username>')
def user_orders(username):
    orders = database.get_user_orders(username)
    return render_template('orders.html', orders=orders)


@app.route('/create_order', methods=['GET', 'POST'])
def create_order():
    if request.method == 'POST':
        username = request.form['username']
        flight_number = request.form['flight_number']
        departure = request.form['departure']
        arrival = request.form['arrival']

        if not username or not flight_number or not departure or not arrival:
            flash('All fields are required!', 'error')
            return render_template('create_order.html')

        if not database.find_user_by_username(username):
            flash('User does not exist!', 'error')
            return render_template('create_order.html')

        database.create_order(username, flight_number, departure, arrival)
        flash('Order created successfully!', 'success')
        return redirect(url_for('index'))

    return render_template('create_order.html')


if __name__ == '__main__':
    app.run(debug=True)
