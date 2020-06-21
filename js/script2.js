<body>

<script>

st=prompt('a=');

a=parseFloat(st);

st=prompt('b=');

b=parseFloat(st);

c1=Math.sqrt(Math.pow(a,4)+Math.abs(b));

c2=Math.pow(Math.abs(a+b),2)/(Math.sqrt(a*a+1)+1);

c=c1+c2;

st='c='+c;

alert(st);

</script>

</body>