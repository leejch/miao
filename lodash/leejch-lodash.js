var leejch = function() {

    /*
     * _.compact(array)
     *
     * Creates an array with all falsey values removed.
     * The values false, null, 0, "", undefined, and NaN are falsey.
     *
     * Arguments:
     * array (Array): The array to compact.
     *
     * Returns:
     * (Array): Returns the new array of filtered values.
     *
     * Example:
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
        let result = [];
        for (let i = 0; i < array.length; i++) {

            // falsey值不push到新数组
            if (
                array[i] === false ||
                array[i] === null ||
                array[i] === 0 ||
                array[i] === "" ||
                array[i] === undefined ||

                // JavaScript里只有NaN!==NaN
                // 可以用isNaN()和array[i] !== array[i]
                // 但isNaN()会在非数字类型的值上进行隐式类型转换，导致不必要的错误判断
                // 而Number.isNaN()专门用于判断一个值是否为NaN，并且不会进行类型转换，避免了isNaN()的陷阱
                Number.isNaN(array[i])
            ) {
                continue;
            }

            // 当前元素已判断为有效值，push到结果数组
            result.push(array[i]);
        }

        // 返回无falsey值的新数组
        return result;
    }


    return {
        compact: compact,
    }
} ()
