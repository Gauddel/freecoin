pragma solidity ^0.6.0;

import "github.com/OpenZeppelin/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/contracts/math/SafeMath.sol";

/// math.sol -- mixin for inline numerical wizardry

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// contract DSMath {
//     function add(uint x, uint y) internal pure returns (uint z) {
//         require((z = x + y) >= x, "ds-math-add-overflow");
//     }
//     function sub(uint x, uint y) internal pure returns (uint z) {
//         require((z = x - y) <= x, "ds-math-sub-underflow");
//     }
//     function mul(uint x, uint y) internal pure returns (uint z) {
//         require(y == 0 || (z = x * y) / y == x, "ds-math-mul-overflow");
//     }

//     function min(uint x, uint y) internal pure returns (uint z) {
//         return x <= y ? x : y;
//     }
//     function max(uint x, uint y) internal pure returns (uint z) {
//         return x >= y ? x : y;
//     }
//     function imin(int x, int y) internal pure returns (int z) {
//         return x <= y ? x : y;
//     }
//     function imax(int x, int y) internal pure returns (int z) {
//         return x >= y ? x : y;
//     }

//     uint constant WAD = 10 ** 18;
//     uint constant RAY = 10 ** 27;

//     //rounds to zero if x*y < WAD / 2
//     function wmul(uint x, uint y) internal pure returns (uint z) {
//         z = add(mul(x, y), WAD / 2) / WAD;
//     }
//     //rounds to zero if x*y < WAD / 2
//     function rmul(uint x, uint y) internal pure returns (uint z) {
//         z = add(mul(x, y), RAY / 2) / RAY;
//     }
//     //rounds to zero if x*y < WAD / 2
//     function wdiv(uint x, uint y) internal pure returns (uint z) {
//         z = add(mul(x, WAD), y / 2) / y;
//     }
//     //rounds to zero if x*y < RAY / 2
//     function rdiv(uint x, uint y) internal pure returns (uint z) {
//         z = add(mul(x, RAY), y / 2) / y;
//     }

//     // This famous algorithm is called "exponentiation by squaring"
//     // and calculates x^n with x as fixed-point and n as regular unsigned.
//     //
//     // It's O(log n), instead of O(n) for naive repeated multiplication.
//     //
//     // These facts are why it works:
//     //
//     //  If n is even, then x^n = (x^2)^(n/2).
//     //  If n is odd,  then x^n = x * x^(n-1),
//     //   and applying the equation for even x gives
//     //    x^n = x * (x^2)^((n-1) / 2).
//     //
//     //  Also, EVM division is flooring and
//     //    floor[(n-1) / 2] = floor[n / 2].
//     //
//     function rpow(uint x, uint n) internal pure returns (uint z) {
//         z = n % 2 != 0 ? x : RAY;

//         for (n /= 2; n != 0; n /= 2) {
//             x = rmul(x, x);

//             if (n % 2 != 0) {
//                 z = rmul(z, x);
//             }
//         }
//     }
// }

contract Free is ERC20 {// Implementation of ERC20 Protocol using Wad Math

    using SafeMath for uint256;

    string public name = "FREE";
    string public symbol = "FRE";
    uint8 public decimals = 18;
    uint private INITIAL_SUPPLY = 2**120 - 1;
    uint256 private EXCHANGE_RATE = 2; // Wad Math

    constructor() public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function getToken(uint256 amountOfTokenWanted) public payable returns (bool) {
        require(amountOfTokenWanted/EXCHANGE_RATE == uint256(msg.value));
        _mint(msg.sender, amountOfTokenWanted);
        return true;
    }

    function getBurnToken(uint amountOfTokenWantedToBurn) public returns (bool) {
        require(balanceOf(msg.sender) >= amountOfTokenWantedToBurn);
        payable(msg.sender).transfer(amountOfTokenWantedToBurn/EXCHANGE_RATE);
        _burn(msg.sender, amountOfTokenWantedToBurn);
    }
}