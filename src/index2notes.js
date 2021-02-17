// the layout is not easy to read. Ask for recommends
// React extension doesn't work. Check it again
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// How Square is a child of Board. It has not even a constructor.
// Square was a class, but it gets props and has only render method, has been changed to function.
function Square(props) {
    //Delete the constructor from Square because Square no longer keeps track of the game’s state...?
    // constructor(props) {
    //     super(props);
    //     this.state = { value: null, }; // why there is a comma after null. Is null the last one?
    // }


    return (<button className="square"
        onClick={props.onClick} > { props.value} </button>
    );
}


class Board extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         squares: Array(9).fill(null), // why there is a comma?
    //         xIsNext: true,
    //     };

    // }

    // handleClick(i) {    //Moved to Game Component======>
    //     const squares = this.state.squares.slice();
    //     if (calculateWinner(squares) || squares[i]) { // Why is || squares[i] also a conditon?
    //         return;
    //     }
    //     squares[i] = this.state.xIsNext ? "X" : "O";
    //     this.setState({
    //         squares: squares,
    //         xIsNext: !this.state.xIsNext,
    //     });
    // }

    //renderSquare means that this class is parent of Square?
    renderSquare(i) {
        return (<Square value={this.props.squares[i]}
            onClick={() => this.this.props.onClick(i)} />);
    }

    render() {
        // const winner = calculateWinner(this.state.squares);
        // let status;
        // if (winner) {
        //     status = "Winner: " + winner;
        // } else {
        //     status = 'Next player: ' + (this.state.xIsNext ? "X" : "O");


        return (< div >
            <
                    div className="board-row" > {this.renderSquare(0)} {this.renderSquare(1)} {this.renderSquare(2)} <
                    div > <
                    div className="board-row" > {this.renderSquare(3)} {this.renderSquare(4)} {this.renderSquare(5)} <
                    /div> <
                    div className="board-row" > {this.renderSquare(6)} {this.renderSquare(7)} {this.renderSquare(8)} <
                    /div> < /
                    div >
                );
            }
        }
    }
}

        class Game extends React.Component {
                                constructor(props) {
                                super(props);
                this.state = {
                                history: [{
                                squares: Array(9).fill(null)
                    }],
                    xIsNext: true,
                };
            }

            handleClick(i) {
                const history = this.state.history;
                const current = history[history.length - 1];
                const squares = current.squares.slice();
                if (calculateWinner(squares) || squares[i]) {
                    return;
                }
                squares[i] = this.state.xIsNext ? 'X' : 'O';
                this.setState({
                                history: history.concat([{
                                squares: squares
                    }]),
                    xIsNext: !this.state.xIsNext,
                });
            }

            render() {
                const history = this.state.history;
                const current = history[history.length - 1];
                const winner = calculateWinner(current.squares);

                let status;
                if (winner) {
                                status = 'Winner: ' + winner;
                } else {
                                status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
                }

                return ( <
                    div className="game" >
                                <
                    div className="game-board" >
                                    <
                                        Board squares={current.squares}
                                        onClick={
                                            (i) => this.handleClick(i)
                                        }
                                    /> < /
                    div > <
                    div className="game-info" >
                                        <
                    div > {status} < /div> <
                    ol > { /* TODO */} < /ol> < /
                    div > <
                    /div>
                );
            }
        }

        function calculateWinner(squares) {
            const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];
            for (let i = 0; i < lines.length; {
                const [a, b, c] = lines[i];
                if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                    return squares[a]; // burada a yerine b ya da c dondurse de olurdu.
                }
            }
            return null;
        }

        // ========================================

        ReactDOM.render( <
                                                    Game /> ,
            document.getElementById('root')
        );