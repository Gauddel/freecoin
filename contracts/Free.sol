pragma solidity >=0.4.0<0.6.0;

contract Free {// Implementation of ERC20 Protocol

    string public constant name = "FREE";
    string public constant symbol = "FRE";
    mapping(address => uint) private _balances;
    mapping(address => mapping(address => uint)) _allowed;
    mapping(address => uint) _allowedBalances;
    uint private _totalSupply = 250;

    constructor() public {
        _balances[msg.sender] += _totalSupply;
    }

    function totalSupply() public view returns(uint) {
        return _totalSupply;
    }

    function balanceOf(address tokenOwner) public view returns(uint balance) {
        return _balances[tokenOwner];
    }

    function allowance(address tokenOwner, address spender) public view returns(uint remaining) {
        return _allowed[tokenOwner][spender];
    }

    function transfer(address to, uint tokens) public enoughTokens(msg.sender, tokens) returns(bool success) {
        _balances[msg.sender] -= tokens;
        _balances[to] += tokens;

        return true;
    }

    function approve(address spender, uint tokens) public enoughTokens(msg.sender, tokens) returns(bool sucess) {
        _allowed[msg.sender][spender] = tokens;
        _allowedBalances[msg.sender] += tokens;
        return true;
    }

    function transferFrom(address from, uint tokens) public enoughApprove(from, msg.sender, tokens) returns(bool success) {
        _balances[from] -= tokens;
        _balances[msg.sender] += tokens;
        _allowed[from][msg.sender] -= tokens;

        _allowedBalances[from] -= tokens;
        return true;
    }

    modifier enoughTokens(address tokenOwner, uint tokens) {
        require(_balances[tokenOwner] - _allowedBalances[tokenOwner] >= tokens);
        _;
    }

    modifier enoughApprove(address from, address to, uint tokens) {
        require(_allowed[from][to] >= tokens);
        _;
    }

    function getSum(uint16 _a, uint16 _b) public pure returns(uint16) {
        return _a + _b;
    }
}