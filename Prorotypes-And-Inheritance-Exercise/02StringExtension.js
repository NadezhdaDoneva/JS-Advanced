(function stringExtension() {
    String.prototype.ensureStart = function (str) {
      if (this.startsWith(str)) {
        return this.toString();
      }
      return str + this.toString();
    };
  
    String.prototype.ensureEnd = function (str) {
      if (this.endsWith(str)) {
        return this.toString();
      }
      return this.toString() + str;
    };
  
    String.prototype.isEmpty = function () {
      return this.length === 0;
    };
  
    String.prototype.truncate = function (n) {
      if (this.length <= n) {
        return this.toString();
      }
  
      if (n < 4) {
        return '.'.repeat(n);
      }
  
      const lastIndex = this.substring(0, n - 2).lastIndexOf(' ');
  
      return lastIndex
        ? this.substring(0, lastIndex) + '...'
        : this.substring(0, n - 3) + '...';
    };
  
    String.format = function (string, ...params) {
      while (params.length) {
        string = string.replace(/{\d+}/, params.shift());
      }
      return string;
    };
  })();