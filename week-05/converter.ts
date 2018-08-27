export function converter(input: number): string {
  let tens = Math.floor(input / 10);
  let hundreds = Math.floor(input / 100);
  let thousands = Math.floor(input / 1000);
  if (input === 1) {
    return 'one'
  }
  else if (input === 2) {
    return 'two'
  }
  else if (input === 3) {
    return 'three'
  }
  else if (input === 4) {
    return 'four'
  }
  else if (input === 5) {
    return 'five'
  }
  else if (input === 6) {
    return 'six'
  }
  else if (input === 7) {
    return 'seven'
  }
  else if (input === 8) {
    return 'eight'
  }
  else if (input === 9) {
    return 'nine'
  }
  else if (input === 0) {
    return 'zero'
  }
  else if (input === 10) {
    return 'ten'
  }
  else if (input === 11) {
    return 'eleven'
  }
  else if (input === 12) {
    return 'twelve'
  }
  else if (input === 13) {
    return 'thirteen'
  }
  else if (input === 14) {
    return 'fourteen'
  }
  else if (input === 15) {
    return 'fifteen'
  }
  else if (input === 16) {
    return 'sixteen'
  }
  else if (input === 17) {
    return 'seventeen'
  }
  else if (input === 18) {
    return 'eighteen'
  }
  else if (input === 19) {
    return 'nineteen'
  }
  else if (input === 20) {
    return 'twenty'
  }
  else if (input > 20 && input < 100) {
    if (tens === 2) {
      if (input % 10 === 0) {
        return 'twenty'
      }
      else {
        return 'twenty-' + converter(input % 10)
      }
    }
    else if (tens === 3) {
      if (input % 10 === 0) {
        return 'thirty'
      }
      else {
        return 'thirty-' + converter(input % 10)
      }
    }
    else if (tens === 4) {
      if (input % 10 === 0) {
        return 'fourty'
      }
      else {
        return 'fourty-' + converter(input % 10)
      }
    }
    else if (tens === 5) {
      if (input % 10 === 0) {
        return 'fifty'
      }
      else {
        return 'fifty-' + converter(input % 10)
      }
    }
    else if (tens === 6) {
      if (input % 10 === 0) {
        return 'sixty'
      }
      else {
        return 'sixty-' + converter(input % 10)
      }
    }
    else if (tens === 7) {
      if (input % 10 === 0) {
        return 'seventy'
      }
      else {
        return 'seventy-' + converter(input % 10)
      }
    }
    else if (tens === 8) {
      if (input % 10 === 0) {
        return 'eighty'
      }
      else {
        return 'eighty-' + converter(input % 10)
      }
    }
    else if (tens === 9) {
      if (input % 10 === 0) {
        return 'ninety'
      }
      else {
        return 'ninety-' + converter(input % 10)
      }
    }
  }
  else if (input > 100 && input < 1000) {
    return converter(hundreds) + ' hundred ' + converter(input - hundreds * 100);
  }
  else if (input > 1000 && input < 100000) {
    return converter(thousands) + ' thousand ' + converter(input - thousands * 1000);
  }
};

export function finalResult (input) {
  if ((input*100)%100 !=0 ) {
    return input.toFixed(2)+' $ ('+converter(Math.floor(input))+' '+((input*100)%100)+'/100)';
  } else {
  return input.toFixed(2)+' $ ('+converter(input)+')';
}
}