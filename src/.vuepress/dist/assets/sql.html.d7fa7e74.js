import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.69e51fc3.js";const p={},t=e(`<h1 id="sql语法" tabindex="-1"><a class="header-anchor" href="#sql语法" aria-hidden="true">#</a> SQL语法</h1><h3 id="ddl" tabindex="-1"><a class="header-anchor" href="#ddl" aria-hidden="true">#</a> DDL</h3><h4 id="数据库、数据表、数据的关系" tabindex="-1"><a class="header-anchor" href="#数据库、数据表、数据的关系" aria-hidden="true">#</a> 数据库、数据表、数据的关系</h4><p><img src="http://images.hellocode.top/数据库、表、数据的关系.png" alt="" loading="lazy"></p><ul><li>MySQL服务器中可以创建多个数据库</li><li>每个数据库可以包含多张数据表</li><li>每个数据表中可以存储多条数据记录</li><li>客户端通过数据库管理系统来操作MySQL数据库</li></ul><h4 id="sql的介绍" tabindex="-1"><a class="header-anchor" href="#sql的介绍" aria-hidden="true">#</a> SQL的介绍</h4><ul><li>SQL(Structured Query Language)：结构化查询语言。其实就是定义了操作所有关系型数据库的一种规则</li><li>通用语法规则 SQL语句可以单行或者多行书写，以分号结尾 可使用空格和缩进来增强语句的可读性 MySQL 数据库的 SQL 语句不区分大小写，关键字建议使用大写 单行注释：<code>--注释内容</code> <code>#注释内容</code>(MySQL特有) 多行注释：<code>/*注释内容*/</code></li><li>SQL分类 DDL(Data Definition Language)：数据定义语言。用来操作数据库、表、列等 DML(Data Manipulation Language)：数据操作语言。用来对数据库中表的数据进行增删改 DQL(Data Query Language)：数据查询语言。用来查询数据库中表的记录（数据） DCL(Data Control Language)：数据控制语言。用来定义数据库的访问权限和安全级别，以及创建用户</li></ul><h4 id="查询和创建数据库" tabindex="-1"><a class="header-anchor" href="#查询和创建数据库" aria-hidden="true">#</a> 查询和创建数据库</h4><ul><li>查询所有数据库 <code>SHOW DATABASES;</code></li><li>查询数据库的创建语句 <code>SHOW CREATE DATABASE 数据库名称;</code></li><li>创建数据库 <code>CREATE DATABASE 数据库名称;</code></li><li>创建数据库（判断，如果不存在则创建） <code>CREATE DATABASE IF NOT EXISTS 数据库名称;</code></li><li>创建数据库（指定字符集） <code>CREATE DATABASE 数据库名称 CHARACTER SET 字符集名称;</code></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询所有数据库</span>
<span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询数据库的创建语句</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> mysql<span class="token punctuation">;</span>

<span class="token comment">-- 创建数据库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db1<span class="token punctuation">;</span>

<span class="token comment">-- 创建数据库并判断，如果不存在则创建</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> db2<span class="token punctuation">;</span>

<span class="token comment">-- 创建数据库并指定字符集</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db3 <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8<span class="token punctuation">;</span>

<span class="token comment">-- 查看数据库的字符集</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db3<span class="token punctuation">;</span>


<span class="token comment">-- 练习：创建db4数据库、如果不存在则创建，并指定字符集为gbk</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> db4 <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> gbk<span class="token punctuation">;</span>
<span class="token comment">-- 查看编码验证</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改、删除、使用数据库" tabindex="-1"><a class="header-anchor" href="#修改、删除、使用数据库" aria-hidden="true">#</a> 修改、删除、使用数据库</h4><ul><li>修改数据库（修改字符集） <code>ALTER DATABASE 数据库名称 CHARACTER SET 字符集名称;</code></li><li>删除数据库 <code>DROP DATABASE 数据库名称;</code></li><li>删除数据库（判断，如果存在则删除） <code>DROP DATABASE IF EXISTS 数据库名称;</code></li><li>使用数据库 <code>USE 数据库名称;</code></li><li>查看当前使用的数据库 <code>SELECT DATABASE();</code></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 修改数据库（字符集）</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> db4 <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8<span class="token punctuation">;</span>
<span class="token comment">-- 查看db4字符集</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db4<span class="token punctuation">;</span>

<span class="token comment">-- 删除数据库</span>
<span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> db1<span class="token punctuation">;</span>

<span class="token comment">-- 删除数据库（判断，存在则删除）</span>
<span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> db2<span class="token punctuation">;</span>

<span class="token comment">-- 使用数据库</span>
<span class="token keyword">USE</span> db3<span class="token punctuation">;</span>

<span class="token comment">-- 查看当前使用的数据库</span>
<span class="token keyword">SELECT</span> <span class="token keyword">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询数据表" tabindex="-1"><a class="header-anchor" href="#查询数据表" aria-hidden="true">#</a> 查询数据表</h4><ul><li>查询所有的数据表 <code>SHOW TABLES;</code></li><li>查询表结构 <code>DESC 表名;</code></li><li>查询表字符集 <code>SHOW TABLE STATUS FROM 库名 LIKE &#39;表名&#39;;</code></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 使用mysql数据库</span>
<span class="token keyword">USE</span> mysql<span class="token punctuation">;</span>

<span class="token comment">-- 查询所有数据表</span>
<span class="token keyword">SHOW</span> <span class="token keyword">TABLES</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询表结构</span>
<span class="token keyword">DESC</span> <span class="token keyword">USER</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询表字符集</span>
<span class="token keyword">SHOW</span> <span class="token keyword">TABLE</span> <span class="token keyword">STATUS</span> <span class="token keyword">FROM</span> mysql <span class="token operator">LIKE</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建数据表" tabindex="-1"><a class="header-anchor" href="#创建数据表" aria-hidden="true">#</a> 创建数据表</h4><ul><li><p>创建数据表</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名<span class="token punctuation">(</span>
	列名<span class="token punctuation">(</span>字段<span class="token punctuation">)</span> 数据类型 约束<span class="token punctuation">,</span>
    列名<span class="token punctuation">(</span>字段<span class="token punctuation">)</span> 数据类型 约束<span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    列名<span class="token punctuation">(</span>字段<span class="token punctuation">)</span> 数据类型 约束
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>数据类型 <mark>int</mark>：整数类型 <mark>double</mark>：小数类型 <mark>date</mark>：日期类型。包含年月日，格式：yyyy-MM-dd</p><p><mark>datetime</mark>：日期类型。包含年月日时分秒，格式：yyyy-MM-dd HH:mm:ss <mark>timestamp</mark>：时间戳类型。包含年月日时分秒，格式yyyy-MM-dd HH:mm:ss 如果不给该字段赋值、或赋值为null，则默认使用当前系统时间自动赋值 <mark>varchar(长度)</mark>：字符串类型 .........</p></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建数据表</span>
<span class="token comment">-- 创建一个product 商品类（商品编号、商品名称、商品价格、商品库存、上架时间）</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> product <span class="token punctuation">(</span>
	id <span class="token keyword">INT</span><span class="token punctuation">,</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	price <span class="token keyword">DOUBLE</span><span class="token punctuation">,</span>
	stock <span class="token keyword">INT</span><span class="token punctuation">,</span>
	insert_time <span class="token keyword">DATE</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 查看product 表详细结构</span>
<span class="token keyword">DESC</span> product<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数据表的修改" tabindex="-1"><a class="header-anchor" href="#数据表的修改" aria-hidden="true">#</a> 数据表的修改</h4><ul><li>修改表名 <code>ALTER TABLE 表名 RENAME TO 新表名;</code></li><li>修改表的字符集 <code>ALTER TABLE 表名 CHARACTER SET 字符集名称;</code></li><li>单独添加一列 <code>ALTER TABLE 表名 ADD 列名 数据类型;</code></li><li>修改某列的数据类型 <code>ALTER TABLE 表名 MODIFY 列名 新数据类型;</code></li><li>修改列名和数据类型 <code>ALTER TABLE 表名 CHANGE 列名 新列名 新数据类型;</code></li><li>删除某一列 <code>ALTER TABLE 表名 DROP 列名</code></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 修改表名</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> product <span class="token keyword">RENAME</span> <span class="token keyword">TO</span> product2<span class="token punctuation">;</span>

<span class="token comment">-- 查看原字符集</span>
<span class="token keyword">SHOW</span> <span class="token keyword">TABLE</span> <span class="token keyword">STATUS</span> <span class="token keyword">FROM</span> db3 <span class="token operator">LIKE</span> <span class="token string">&#39;product2&#39;</span><span class="token punctuation">;</span>
<span class="token comment">-- 修改表的字符集</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> product2 <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> gbk<span class="token punctuation">;</span>

<span class="token comment">-- 给product2添加一列color</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> product2 <span class="token keyword">ADD</span> color <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 将color数据类型修改为int</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> product2 <span class="token keyword">MODIFY</span> color <span class="token keyword">INT</span><span class="token punctuation">;</span>
<span class="token comment">-- 查看表的详细结构</span>
<span class="token keyword">DESC</span> product2<span class="token punctuation">;</span>

<span class="token comment">-- 将color修改为address</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> product2 CHANGE color address <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除address列</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> product2 <span class="token keyword">DROP</span> address<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数据表的删除" tabindex="-1"><a class="header-anchor" href="#数据表的删除" aria-hidden="true">#</a> 数据表的删除</h4><ul><li>删除数据表 <code>DROP TABLE 表名;</code></li><li>删除数据表（判断，如果存在则删除） <code>DROP TABLE IF EXISTS 表名;</code></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 删除product2表</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> product2<span class="token punctuation">;</span>

<span class="token comment">-- 删除表并判断</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> product2<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dml" tabindex="-1"><a class="header-anchor" href="#dml" aria-hidden="true">#</a> DML</h3><h4 id="新增表数据" tabindex="-1"><a class="header-anchor" href="#新增表数据" aria-hidden="true">#</a> 新增表数据</h4><ul><li>给指定列添加数据 <code>INSERT INTO 表名(列名1,列名2,...)VALUES(值1,值2,...);</code></li><li>给全部列添加数据 <code>INSERT INTO 表名 VALUES(值1,值2,...);</code></li><li>批量添加数据 <code>INSERT INTO 表名(列名1,列名2,...)VALUES(值1,值2,...),(值1,值2,...),...;</code><code>INSERT INTO 表名 VALUES(值1,值2,...),(值1,值2,...),...;</code></li></ul><p><mark>列名和值的数量以及数据类型要对应，除了数字类型，其他数据类型的数据都需要加引号（单引双引都行，推荐单引）。</mark></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 向product表添加一条数据（给全部列添加数据）</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product <span class="token punctuation">(</span>id<span class="token punctuation">,</span> NAME<span class="token punctuation">,</span> price<span class="token punctuation">,</span> stock<span class="token punctuation">,</span> insert_time<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;手机&#39;</span><span class="token punctuation">,</span> <span class="token number">2999</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&#39;2022-02-26&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;电脑&#39;</span><span class="token punctuation">,</span> <span class="token number">3999</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token string">&#39;2022-02-27&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 向product表中添加指定数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product <span class="token punctuation">(</span>id<span class="token punctuation">,</span> NAME<span class="token punctuation">,</span> price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;电视&#39;</span><span class="token punctuation">,</span> <span class="token number">1999.99</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 批量添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;冰箱&#39;</span><span class="token punctuation">,</span> <span class="token number">999.99</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token string">&#39;2022-02-26&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;空调&#39;</span><span class="token punctuation">,</span> <span class="token number">1999</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token string">&#39;2030-01-01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改和删除表数据" tabindex="-1"><a class="header-anchor" href="#修改和删除表数据" aria-hidden="true">#</a> 修改和删除表数据</h4><ul><li>修改表中的数据 <code>UPDATE 表名 SET 列名1=值1,列名2=值2,...[WHERE条件];</code><mark>修改语句中必须加条件，如果不加条件，则会将所有数据都修改</mark></li><li>删除表中的数据 <code>DELETE FROM 表名 [WHERE 条件];</code><mark>删除语句中必须加条件，如果不加条件，则会将所有数据都删除</mark></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 修改手机价格为3500</span>
<span class="token keyword">UPDATE</span> product <span class="token keyword">SET</span> price<span class="token operator">=</span><span class="token number">3500</span> <span class="token keyword">WHERE</span> NAME<span class="token operator">=</span><span class="token string">&#39;手机&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 修改电脑的价格为4800、库存为46</span>
<span class="token keyword">UPDATE</span> product <span class="token keyword">SET</span> price<span class="token operator">=</span><span class="token number">4800</span><span class="token punctuation">,</span> stock<span class="token operator">=</span><span class="token number">46</span> <span class="token keyword">WHERE</span> NAME<span class="token operator">=</span><span class="token string">&#39;电脑&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除product 表中的空调信息</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> NAME<span class="token operator">=</span><span class="token string">&#39;空调&#39;</span><span class="token punctuation">;</span>
<span class="token comment">-- 删除product 表中库存为10的商品信息</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> stock<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dql" tabindex="-1"><a class="header-anchor" href="#dql" aria-hidden="true">#</a> DQL</h3><h4 id="查询语法" tabindex="-1"><a class="header-anchor" href="#查询语法" aria-hidden="true">#</a> 查询语法</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	字段列表
<span class="token keyword">FROM</span>
	表名列表
<span class="token keyword">WHERE</span>
	条件列表
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	分组字段
<span class="token keyword">HAVING</span>
	分组后的过滤条件
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	排序
<span class="token keyword">LIMIT</span>
	分页
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>这些语句不一定全部出现，但要按照上面的顺序</mark></p><h4 id="查询全部" tabindex="-1"><a class="header-anchor" href="#查询全部" aria-hidden="true">#</a> 查询全部</h4><ul><li><p>查询全部的表数据 <code>SELECT * FROM 表名;</code></p></li><li><p>查询指定字段的表数据 <code>SELECT 列名1,列名2,... FROM 表名;</code></p></li><li><p>去除重复查询 <code>SELECT DISTINCT 列名1,列名2,... FROM 表名;</code></p></li><li><p>计算列的值（四则运算） <code>SELECT 列名1 运算符(+ - * /) 列名2 FROM 表名;</code></p><blockquote><p><mark>如果某一列为null，可以进行替换</mark>：<code>IFNULL (表达式1,表达式2)</code> 表达式1：想替换的列 表达式2：想替换的值</p></blockquote></li><li><p>起别名查询 <code>SELECT 列名 AS 别名 FROM 表名;</code></p></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 准备数据（创建数据库以及表）</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db1<span class="token punctuation">;</span>
<span class="token keyword">USE</span> db1<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> product<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span><span class="token punctuation">,</span>			<span class="token comment">-- 商品编号</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>	<span class="token comment">-- 商品名称</span>
	price <span class="token keyword">DOUBLE</span><span class="token punctuation">,</span>		<span class="token comment">-- 商品价格</span>
	brand <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>	<span class="token comment">-- 商品品牌</span>
	stock <span class="token keyword">INT</span><span class="token punctuation">,</span>		<span class="token comment">-- 商品库存</span>
	insert_time <span class="token keyword">DATE</span> 	<span class="token comment">-- 添加时间</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加测试数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product <span class="token keyword">VALUES</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;华为手机&#39;</span><span class="token punctuation">,</span> <span class="token number">5999</span><span class="token punctuation">,</span> <span class="token string">&#39;华为&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token string">&#39;2018-03-10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;小米手机&#39;</span><span class="token punctuation">,</span> <span class="token number">1999</span><span class="token punctuation">,</span> <span class="token string">&#39;小米&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token string">&#39;2019-02-10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;苹果手机&#39;</span><span class="token punctuation">,</span> <span class="token number">3999</span><span class="token punctuation">,</span> <span class="token string">&#39;苹果&#39;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token string">&#39;2018-07-23&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;华为电脑&#39;</span><span class="token punctuation">,</span> <span class="token number">4999</span><span class="token punctuation">,</span> <span class="token string">&#39;华为&#39;</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token string">&#39;2020-10-27&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;小米电脑&#39;</span><span class="token punctuation">,</span> <span class="token number">5996</span><span class="token punctuation">,</span> <span class="token string">&#39;小米&#39;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token string">&#39;2021-03-29&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;苹果电脑&#39;</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token string">&#39;苹果&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token string">&#39;2022-02-26&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;联想电脑&#39;</span><span class="token punctuation">,</span> <span class="token number">6999</span><span class="token punctuation">,</span> <span class="token string">&#39;联想&#39;</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;2023-03-14&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">-- 查询全部的表数据</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product<span class="token punctuation">;</span>

<span class="token comment">-- 查询指定字段的表数据（name、price、brand）</span>
<span class="token keyword">SELECT</span> NAME<span class="token punctuation">,</span> price<span class="token punctuation">,</span> brand <span class="token keyword">FROM</span> product<span class="token punctuation">;</span>

<span class="token comment">-- 查询品牌</span>
<span class="token keyword">SELECT</span> brand <span class="token keyword">FROM</span> product<span class="token punctuation">;</span>
<span class="token comment">-- 查询品牌，去除重复</span>
<span class="token keyword">SELECT</span>	<span class="token keyword">DISTINCT</span> brand <span class="token keyword">FROM</span> product<span class="token punctuation">;</span>

<span class="token comment">-- 查询商品名称和库存，库存数量在原有的基础上加10</span>
<span class="token keyword">SELECT</span> NAME<span class="token punctuation">,</span>stock<span class="token operator">+</span><span class="token number">10</span> <span class="token keyword">FROM</span> product<span class="token punctuation">;</span>
<span class="token comment">-- 查询商品名称和库存，库存数量在原有的基础上加10，进行null值判断</span>
<span class="token keyword">SELECT</span> NAME<span class="token punctuation">,</span>IFNULL<span class="token punctuation">(</span>stock<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">10</span> <span class="token keyword">FROM</span> product<span class="token punctuation">;</span>
<span class="token comment">-- 查询商品名称和库存，库存数量在原有的基础上加10，进行null值判断，起别名为getSum</span>
<span class="token keyword">SELECT</span> NAME<span class="token punctuation">,</span>IFNULL<span class="token punctuation">(</span>stock<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">10</span> <span class="token keyword">AS</span> getSum <span class="token keyword">FROM</span> product<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> NAME<span class="token punctuation">,</span>IFNULL<span class="token punctuation">(</span>stock<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">10</span> getSum <span class="token keyword">FROM</span> product<span class="token punctuation">;</span>		<span class="token comment">-- 起别名时AS可以省略（空格隔开）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h4><ul><li>查询条件分类</li></ul><table><thead><tr><th>符号</th><th>功能</th></tr></thead><tbody><tr><td>&gt;</td><td>大于</td></tr><tr><td>&lt;</td><td>小于</td></tr><tr><td>&gt;=</td><td>大于等于</td></tr><tr><td>&lt;=</td><td>小于等于</td></tr><tr><td>=</td><td>等于</td></tr><tr><td>&lt;&gt; 或 !=</td><td>不等于</td></tr><tr><td>BETWEEN...AND...</td><td>在某个范围之内（都包含）</td></tr><tr><td>IN(...)</td><td>多选...</td></tr><tr><td>LIKE 占位符</td><td>模糊查询；占位符<code>_</code>表示单个任意字符，<code>%</code>表示多个</td></tr><tr><td>IS NULL</td><td>是NULL</td></tr><tr><td>IS NOT NULL</td><td>不是 NULL</td></tr><tr><td>AND 或 &amp;&amp;</td><td>并且</td></tr><tr><td>OR 或 ||</td><td>或者</td></tr><tr><td>NOT 或 !</td><td>非，不是</td></tr></tbody></table><ul><li>条件查询语法 <code>SELECT 列名列表 FROM 表名 WHERE 条件;</code></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询库存大于20的商品信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> stock <span class="token operator">&gt;</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询品牌为华为的商品信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> brand <span class="token operator">=</span> <span class="token string">&#39;华为&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询金额在4000-6000之间的商品信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> price <span class="token operator">&gt;</span> <span class="token number">4000</span> <span class="token operator">AND</span> price <span class="token operator">&lt;</span> <span class="token number">6000</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> price <span class="token operator">BETWEEN</span> <span class="token number">4000</span> <span class="token operator">AND</span> <span class="token number">6000</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询库存为14、30、23的商品信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> stock <span class="token operator">=</span> <span class="token number">14</span> <span class="token operator">OR</span> stock <span class="token operator">=</span> <span class="token number">30</span> <span class="token operator">OR</span> stock <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> stock <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询库存为null的商品信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> stock <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询库存不为null的商品信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> stock <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询名称以小米为开头的商品信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> NAME <span class="token operator">LIKE</span> <span class="token string">&#39;小米%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询名称第二个字是为的商品信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> NAME <span class="token operator">LIKE</span> <span class="token string">&#39;_为%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询名称为四个字符的商品信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> NAME <span class="token operator">LIKE</span> <span class="token string">&#39;____&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询名称中包含电脑的商品信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> NAME <span class="token operator">LIKE</span> <span class="token string">&#39;%电脑%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="聚合函数查询" tabindex="-1"><a class="header-anchor" href="#聚合函数查询" aria-hidden="true">#</a> 聚合函数查询</h4><ul><li><p>聚合函数的介绍 将一列数据作为一个整体，进行纵向的计算</p></li><li><p>聚合函数分类</p><table><thead><tr><th>函数名</th><th>功能</th></tr></thead><tbody><tr><td>COUNT(列名)</td><td>统计数量（一般选用不为null的列）</td></tr><tr><td>MAX(列名)</td><td>最大值</td></tr><tr><td>MIN(列名)</td><td>最小值</td></tr><tr><td>SUM(列名)</td><td>求和</td></tr><tr><td>AVG(列名)</td><td>平均值</td></tr></tbody></table></li><li><p>聚合函数查询语法 <code>SELECT 函数名(列名) FROM 表名 [WHERE 条件];</code></p></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 计算product表中总记录条数</span>
<span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> product<span class="token punctuation">;</span>

<span class="token comment">-- 获取最高价格</span>
<span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token keyword">FROM</span> product<span class="token punctuation">;</span>

<span class="token comment">-- 获取最低库存</span>
<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>stock<span class="token punctuation">)</span> <span class="token keyword">FROM</span> product<span class="token punctuation">;</span>

<span class="token comment">-- 获取总库存数量</span>
<span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>stock<span class="token punctuation">)</span> <span class="token keyword">FROM</span> product<span class="token punctuation">;</span>

<span class="token comment">-- 获取品牌为苹果的总库存数量</span>
<span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>stock<span class="token punctuation">)</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> brand <span class="token operator">=</span> <span class="token string">&#39;苹果&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 获取品牌为小米的平均商品价格</span>
<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> brand <span class="token operator">=</span> <span class="token string">&#39;小米&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="排序查询" tabindex="-1"><a class="header-anchor" href="#排序查询" aria-hidden="true">#</a> 排序查询</h4><ul><li>排序查询语法 <code>SELECT 列名列表 FROM 表名 [WHERE 条件] ORDER BY 列名 排序方式, 列名 排序方式, ...; </code></li><li>排序方式 <mark>ASC</mark>升序【默认】 <mark>DESC</mark>降序 如果有多个排序条件，只有当前面的条件值一样时，才会判断第二条件</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 按照库存升序排序</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> stock <span class="token keyword">ASC</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询名称中包含手机的商品信息，按照金额降序排序</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> NAME <span class="token operator">LIKE</span> <span class="token string">&#39;%手机%&#39;</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> price <span class="token keyword">DESC</span><span class="token punctuation">;</span>

<span class="token comment">-- 按照金额升序排序，如果金额相同，按照库存降序排列</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> price <span class="token keyword">ASC</span><span class="token punctuation">,</span> stock <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分组查询" tabindex="-1"><a class="header-anchor" href="#分组查询" aria-hidden="true">#</a> 分组查询</h4><ul><li><p>分组查询语法</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 列名列表 <span class="token keyword">FROM</span> 表名 <span class="token punctuation">[</span><span class="token keyword">WHERE</span> 条件<span class="token punctuation">]</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> 分组列名
<span class="token punctuation">[</span><span class="token keyword">HAVING</span> 分组后的条件过滤<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> 排序列名 排序方式<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 按照品牌分组，获取每组商品的总金额</span>
<span class="token keyword">SELECT</span> brand<span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token keyword">FROM</span> product <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> brand<span class="token punctuation">;</span>

<span class="token comment">-- 对金额大于4000元的商品，按照品牌分组，获取每组商品的总金额</span>
<span class="token keyword">SELECT</span> brand<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> price <span class="token operator">&gt;</span> <span class="token number">4000</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> brand<span class="token punctuation">;</span>

<span class="token comment">-- 对金额大于4000元的商品，按照品牌分组，获取每组商品的总金额，只显示总金额大于7000元的</span>
<span class="token keyword">SELECT</span> brand<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token keyword">AS</span> getsum <span class="token keyword">FROM</span> product <span class="token keyword">WHERE</span> price <span class="token operator">&gt;</span> <span class="token number">4000</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> brand <span class="token keyword">HAVING</span> getsum <span class="token operator">&gt;</span> <span class="token number">7000</span><span class="token punctuation">;</span>

<span class="token comment">-- 对金额大于4000元的商品，按照品牌分组，获取每组商品的总金额，只显示总金额大于7000元的，并按照总金额的降序进行排序</span>
<span class="token keyword">SELECT</span> brand<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span> <span class="token keyword">AS</span> getsum <span class="token keyword">FROM</span> product 
<span class="token keyword">WHERE</span> price <span class="token operator">&gt;</span> <span class="token number">4000</span> 
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> brand 
<span class="token keyword">HAVING</span> getsum <span class="token operator">&gt;</span> <span class="token number">7000</span> 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> getsum <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h4><ul><li><p>分页查询语法</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 列名列表 <span class="token keyword">FROM</span> 表名
<span class="token punctuation">[</span><span class="token keyword">WHERE</span> 条件<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> 分组列名<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">HAVING</span> 分组后的条件过滤<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> 排序列名 排序方式<span class="token punctuation">]</span>
<span class="token keyword">LIMIT</span> 当前页数<span class="token punctuation">,</span>每页显示的条数<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>当前页数 = (当前页数 - 1) * 每页显示的条数</p></blockquote></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 每页显示3条数据</span>

<span class="token comment">-- 第一页 当前页数 = (1 - 1) * 3</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">-- 第二页 当前页数 = (2 - 1) * 3</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">LIMIT</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">-- 第三页 当前页数 = (3 - 1) * 3</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> product <span class="token keyword">LIMIT</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>LIMIT后的两个参数可以理解为：从几号索引开始，一页显示几个 故第一页：从0索引开始，显示3个（0，1，2） 第二页：从3索引开始，显示3个（3，4，5） 第三页：从6索引开始，显示3个（6，7，8） ...........</p></blockquote><h3 id="约束" tabindex="-1"><a class="header-anchor" href="#约束" aria-hidden="true">#</a> 约束</h3><ul><li><p>什么是约束 对表中的数据进行限定，保证数据的正确性、有效性、完整性</p></li><li><p>约束的分类</p><table><thead><tr><th>约束</th><th>作用</th></tr></thead><tbody><tr><td>PRIMARY KEY</td><td>主键约束</td></tr><tr><td>PRIMARY KEY AUTO_INCREMENT</td><td>主键自增</td></tr><tr><td>UNIQUE</td><td>唯一约束</td></tr><tr><td>NOT NULL</td><td>非空约束</td></tr><tr><td>FOREIGN KEY</td><td>外键约束</td></tr><tr><td>FOREIGN KEY ON UPDATE CASCADE</td><td>外键级联更新</td></tr><tr><td>FOREIGN KEY ON DELETE CASCADE</td><td>外键级联删除</td></tr></tbody></table></li></ul><h4 id="主键约束" tabindex="-1"><a class="header-anchor" href="#主键约束" aria-hidden="true">#</a> 主键约束</h4><ul><li><p>特点 主键约束默认包含非空和唯一两个功能 一张表只能有一个主键 主键一般用于表中数据的唯一标识</p></li><li><p>建表时添加主键约束</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名<span class="token punctuation">(</span>
	列名 数据类型 <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    列名 数据类型 约束
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除主键约束 <code>ALTER TABLE 表名 DROP PRIMARY KEY;</code></p></li><li><p>建表以后单独添加主键 <code>ALTER TABLE 表名 MODIFY 列名 数据类型 PRIMARY KEY;</code></p></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建学生表(编号、姓名、年龄) 编号为主键</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> students<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	age <span class="token keyword">INT</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询学生表的详细信息</span>
<span class="token keyword">DESC</span> students<span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> students <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">-- 添加失败，主键不能为空</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> students <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> students <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">-- 添加失败，主键唯一</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> students <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除主键</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> students <span class="token keyword">DROP</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">;</span>

<span class="token comment">-- 建表后单独添加主键约束</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> students <span class="token keyword">MODIFY</span> id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="主键自增约束" tabindex="-1"><a class="header-anchor" href="#主键自增约束" aria-hidden="true">#</a> 主键自增约束</h4><ul><li><p>建表时添加主键自增约束</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名<span class="token punctuation">(</span>
	列名 数据类型 <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    列名 数据类型 约束
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>添加自增约束之后，主键内容就可以写null，会自动进行加一操作</p></blockquote></li><li><p>删除主键自增约束 <code>ALTER TABLE 表名 MODIFY 列名 数据类型;</code></p></li><li><p>建表后单独添加主键自增约束 <code>ALTER TABLE 表名 MODIFY 列名 数据类型 AUTO_INCREMENT;</code></p></li></ul><p><mark>MySQL中的自增约束，必须配合主键的约束一起来使用！</mark></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建学生表(编号、姓名、年龄) 编号设为主键自增</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> students<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	age <span class="token keyword">INT</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询学生表的详细信息</span>
<span class="token keyword">DESC</span> students<span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> students <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> students <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除自增约束</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> students <span class="token keyword">MODIFY</span> id <span class="token keyword">INT</span><span class="token punctuation">;</span>		<span class="token comment">-- 只删除自增约束，不会删除主键约束</span>

<span class="token comment">-- 建表后单独添加自增约束</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> students <span class="token keyword">MODIFY</span> id <span class="token keyword">INT</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="唯一约束" tabindex="-1"><a class="header-anchor" href="#唯一约束" aria-hidden="true">#</a> 唯一约束</h4><ul><li><p>建表时添加唯一约束</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名<span class="token punctuation">(</span>
	列名 数据类型 <span class="token keyword">UNIQUE</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    列名 数据类型 约束
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除唯一约束 <code>ALTER TABLE 表名 DROP INDEX 列名;</code></p></li><li><p>建表后单独添加唯一约束 <code>ALTER TABLE 表名 MODIFY 列名 数据类型 UNIQUE;</code></p></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建学生表（编号、姓名、年龄）  编号设为主键自增，年龄设为唯一</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> student<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	age <span class="token keyword">INT</span> <span class="token keyword">UNIQUE</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 查询学生表的详细信息</span>
<span class="token keyword">DESC</span> student<span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> student <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> student <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除唯一约束</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> age<span class="token punctuation">;</span>

<span class="token comment">-- 建表后单独添加唯一约束</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">MODIFY</span> age <span class="token keyword">INT</span> <span class="token keyword">UNIQUE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="非空约束" tabindex="-1"><a class="header-anchor" href="#非空约束" aria-hidden="true">#</a> 非空约束</h4><ul><li><p>建表时添加非空约束</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名<span class="token punctuation">(</span>
	列名 数据类型 <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    列名 数据类型 约束
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除非空约束 <code>ALTER TABLE 表名 MODIFY 列名 数据类型;</code></p></li><li><p>建表后单独添加非空约束 <code>ALTER TABLE 表名 MODIFY 列名 数据类型 NOT NULL;</code></p></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建学生表（编号、姓名、年龄）  编号设为主键自增，姓名设为非空，年龄设为唯一</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> student<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
	age <span class="token keyword">INT</span> <span class="token keyword">UNIQUE</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询学生表的详细信息</span>
<span class="token keyword">DESC</span> student<span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> student <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除非空约束</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">MODIFY</span> NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加非空约束</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student <span class="token keyword">MODIFY</span> NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="外键约束" tabindex="-1"><a class="header-anchor" href="#外键约束" aria-hidden="true">#</a> 外键约束</h4><ul><li><p>为什么要有外键约束？ 当表与表之间的数据有相关联性的时候，如果没有相关的数据约束，则无法保证数据的准确性！ 比如用户和订单，表与表之间也有关联</p></li><li><p>外键约束的作用 让表与表之间产生关联关系，从而保证数据的准确性！</p></li><li><p>建表时添加外键约束</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名{
	列名 数据类型 约束<span class="token punctuation">,</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
	<span class="token keyword">CONSTRAINT</span> 外键名 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>本表外键列名<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> 主表名<span class="token punctuation">(</span>主表主键列名<span class="token punctuation">)</span>
}<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除外键约束 <code>ALTER TABLE 表名 DROP FOREIGN KEY 外键名;</code></p></li><li><p>建表后单独添加外键约束</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">ADD</span>
<span class="token keyword">CONSTRAINT</span> 外键名 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>本表外键列名<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> 主表名<span class="token punctuation">(</span>主键列名<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>外键名一般取两个表的首字母_fk编号 例如：ou_fk1</p></blockquote></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 建表时添加外键约束</span>
<span class="token comment">-- 创建user表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">USER</span><span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- id</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> 		<span class="token comment">-- 姓名</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 添加用户数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">USER</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建orderlist订单表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> orderlist<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- id</span>
	number <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>		<span class="token comment">-- 订单编号</span>
	uid <span class="token keyword">INT</span><span class="token punctuation">,</span> 				<span class="token comment">-- 外键列</span>
	<span class="token keyword">CONSTRAINT</span> ou_fk1 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>uid<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token keyword">USER</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加订单数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> orderlist <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;001&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;002&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;003&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;004&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加一个订单，但是没有真实用户,添加失败</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> orderlist <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;005&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除李四用户，删除失败</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">WHERE</span> NAME<span class="token operator">=</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除外键约束</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> orderlist <span class="token keyword">DROP</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> ou_fk1<span class="token punctuation">;</span> 

<span class="token comment">-- 添加外键约束</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> orderlist <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> ou_fk1 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>uid<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token keyword">USER</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="外键级联操作-了解" tabindex="-1"><a class="header-anchor" href="#外键级联操作-了解" aria-hidden="true">#</a> 外键级联操作(了解)</h4><ul><li>什么是级联更新 当对主表中的数据进行修改时，从表中有关联的数据也会随之修改</li><li>什么是级联删除 当主表中的数据删除时，从表中的数据也会随之删除</li></ul><blockquote><p>级联操作在真实开发中很少使用，因为它耦合性太强，牵一发动全身</p></blockquote><ul><li><p>添加级联更新</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">ADD</span>
<span class="token keyword">CONSTRAINT</span> 外键名 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>本表外键列名<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> 主表名<span class="token punctuation">(</span>主键列名<span class="token punctuation">)</span>
<span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加级联删除</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">ADD</span>
<span class="token keyword">CONSTRAINT</span> 外键名 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>本表外键列名<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> 主表名<span class="token punctuation">(</span>主键列名<span class="token punctuation">)</span>
<span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>同时添加级联更新和级联删除</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">ADD</span>
<span class="token keyword">CONSTRAINT</span> 外键名 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>本表外键列名<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> 主表名<span class="token punctuation">(</span>主键列名<span class="token punctuation">)</span>
<span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 添加外键约束，同时添加级联更新和级联删除</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> orderlist <span class="token keyword">ADD</span>
<span class="token keyword">CONSTRAINT</span> ou_fk1 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>uid<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token keyword">USER</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>

<span class="token comment">-- 将李四这个用户id修改为3,订单表中的uid也自动修改</span>
<span class="token keyword">UPDATE</span> <span class="token keyword">USER</span> <span class="token keyword">SET</span> id<span class="token operator">=</span><span class="token number">3</span> <span class="token keyword">WHERE</span> NAME<span class="token operator">=</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 将李四这个用户删除，订单表中的该用户所属的订单也自动修改</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">WHERE</span> id<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多表操作" tabindex="-1"><a class="header-anchor" href="#多表操作" aria-hidden="true">#</a> 多表操作</h3><ul><li>多表概念 通俗的讲就是多张数据表，而表与表之间是可以有一定的关联关系，这种关联关系通过外键约束实现。</li><li>多表的分类 一对一 一对多 多对多</li></ul><h4 id="一对一" tabindex="-1"><a class="header-anchor" href="#一对一" aria-hidden="true">#</a> 一对一</h4><ul><li>适用场景 例如人和身份证。一个人只有一个身份证，一个身份证只能对应一个人</li><li>建表原则 在任意一个表建立外键，去关联另外一个表的主键</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建db5数据库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db5<span class="token punctuation">;</span>

<span class="token comment">-- 使用db5数据库</span>
<span class="token keyword">USE</span> db5<span class="token punctuation">;</span>

<span class="token comment">-- 创建person表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> person<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 主键id</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>			<span class="token comment">-- 姓名</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> person <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建card表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> card<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>		<span class="token comment">-- 主键id</span>
	number <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">UNIQUE</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>		<span class="token comment">-- 身份证号</span>
	pid <span class="token keyword">INT</span> <span class="token keyword">UNIQUE</span><span class="token punctuation">,</span>					<span class="token comment">-- 外键列</span>
	<span class="token keyword">CONSTRAINT</span> cp_fk1 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>pid<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> person<span class="token punctuation">(</span>id<span class="token punctuation">)</span> 
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> card <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;12345&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;56789&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="一对多" tabindex="-1"><a class="header-anchor" href="#一对多" aria-hidden="true">#</a> 一对多</h4><ul><li>适用场景 用户和订单。一个用户可以有多个订单 商品分类和商品。一个分类下可以有多个商品</li><li>建表原则 在多的一方，建立外键约束，来关联一的一方主键</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建user表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">USER</span><span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 主键id</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>			<span class="token comment">-- 姓名</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">USER</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建orderlist表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> orderlist<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 主键id</span>
	number <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>			<span class="token comment">-- 订单编号</span>
	uid <span class="token keyword">INT</span><span class="token punctuation">,</span>				<span class="token comment">-- 外键链</span>
	<span class="token keyword">CONSTRAINT</span> ou_fk1 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>uid<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token keyword">USER</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> orderlist <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;001&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;002&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;003&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;004&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多对多" tabindex="-1"><a class="header-anchor" href="#多对多" aria-hidden="true">#</a> 多对多</h4><ul><li>适用场景 学生和课程。一个学生可以选择多个课程，一个课程也可以被多个学生选择</li><li>建表原则 需要借助第三张中间表，中间表至少包含两个列。这两个列作为中间表的外键，分别关联两张表的主键</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建student表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> student<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 主键id</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>			<span class="token comment">-- 姓名</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> student <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建course表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> course<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 主键id</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>			<span class="token comment">-- 课程名称</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> course <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;高数&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;线代&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建中间表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> stu_course<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 主键id</span>
	sid <span class="token keyword">INT</span><span class="token punctuation">,</span>	<span class="token comment">-- 用于和student表中的id进行外键关联</span>
	cid <span class="token keyword">INT</span><span class="token punctuation">,</span>	<span class="token comment">-- 用于和course表中的id进行外键关联</span>
	<span class="token keyword">CONSTRAINT</span> sc_fk1 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>sid<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> student<span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span>	<span class="token comment">-- 添加外键约束</span>
	<span class="token keyword">CONSTRAINT</span> sc_fk2 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>cid<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> course<span class="token punctuation">(</span>id<span class="token punctuation">)</span>	<span class="token comment">-- 添加外键约束</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> stu_course <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h4><p><strong>多表查询分类</strong></p><ul><li><p>内连接查询</p></li><li><p>外连接查询</p></li><li><p>子查询</p></li><li><p>自关联查询</p></li></ul><p><strong>数据准备</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建db4数据库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db4<span class="token punctuation">;</span>

<span class="token comment">-- 使用db4数据库</span>
<span class="token keyword">USE</span> db4<span class="token punctuation">;</span>

<span class="token comment">-- 创建user表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">USER</span><span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 用户id</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>			<span class="token comment">-- 用户姓名</span>
	age <span class="token keyword">INT</span>					<span class="token comment">-- 用户年龄</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">USER</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;赵六&#39;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 订单表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> orderlist<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 订单id</span>
	number <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>			<span class="token comment">-- 订单编号</span>
	uid <span class="token keyword">INT</span><span class="token punctuation">,</span>				<span class="token comment">-- 外键字段</span>
	<span class="token keyword">CONSTRAINT</span> ou_fk1 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>uid<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token keyword">USER</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> 
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> orderlist <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;001&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> orderlist <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;002&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> orderlist <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;003&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> orderlist <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;004&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> orderlist <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;005&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> orderlist <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;006&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> orderlist <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;007&#39;</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 商品分类表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> category<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 商品分类id</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>			<span class="token comment">-- 商品分类名称</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> category <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;手机数码&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;电脑办公&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;烟酒茶糖&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;鞋靴箱包&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 商品表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> product<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 商品id</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>			<span class="token comment">-- 商品名称</span>
	cid <span class="token keyword">INT</span><span class="token punctuation">,</span>				<span class="token comment">-- 外键字段</span>
	<span class="token keyword">CONSTRAINT</span> cp_fk1 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>cid<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> category<span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product <span class="token keyword">VALUES</span> 
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;华为手机&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;小米手机&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;联想电脑&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;苹果电脑&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;中华香烟&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;玉溪香烟&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;计生用品&#39;</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 中间表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> us_pro<span class="token punctuation">(</span>
	upid <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 中间表id</span>
	uid <span class="token keyword">INT</span><span class="token punctuation">,</span>				<span class="token comment">-- 外键字段，需要和用户表的主键产生关联</span>
	pid <span class="token keyword">INT</span><span class="token punctuation">,</span>				<span class="token comment">-- 外键字段，需要和商品表的主键产生关联</span>
	<span class="token keyword">CONSTRAINT</span> up_fk1 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>uid<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token keyword">USER</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token keyword">CONSTRAINT</span> up_fk2 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>pid<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> product<span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> us_pro <span class="token keyword">VALUES</span>
<span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>内连接查询</strong></p><ul><li>查询原理 内连接查询的是两张表有交集的部分数据（有主外键关联的数据）</li><li>查询语法 显示内连接：<code>SELECT 列名 FROM 表名1 [INNER] JOIN 表名2 ON 条件;</code> 隐式内连接：<code>SELECT 列名 FROM 表名1,表名2 WHERE 条件;</code></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*
	显示内连接
*/</span>

<span class="token comment">-- 查询用户信息和他对应的订单信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> orderlist <span class="token keyword">ON</span> orderlist<span class="token punctuation">.</span>uid <span class="token operator">=</span> <span class="token keyword">user</span><span class="token punctuation">.</span>id<span class="token punctuation">;</span>

<span class="token comment">-- 查询用户信息和对应的订单信息，起别名</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span> u <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> orderlist o <span class="token keyword">ON</span> o<span class="token punctuation">.</span>uid <span class="token operator">=</span> u<span class="token punctuation">.</span>id<span class="token punctuation">;</span>

<span class="token comment">-- 查询用户姓名、年龄和订单号</span>
<span class="token keyword">SELECT</span>
	u<span class="token punctuation">.</span>name<span class="token punctuation">,</span>		<span class="token comment">-- 用户姓名</span>
	u<span class="token punctuation">.</span>age<span class="token punctuation">,</span>		<span class="token comment">-- 用户年龄</span>
	o<span class="token punctuation">.</span>number	<span class="token comment">-- 订单编号</span>
<span class="token keyword">FROM</span>
	<span class="token keyword">USER</span> u 		<span class="token comment">-- 用户表</span>
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span>
	orderlist o 	<span class="token comment">-- 订单表</span>
<span class="token keyword">ON</span>
	o<span class="token punctuation">.</span>uid <span class="token operator">=</span> u<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
	
<span class="token comment">/*
	隐式内连接
*/</span>

<span class="token comment">-- 查询用户姓名，年龄，订单编号</span>
<span class="token keyword">SELECT</span>
	u<span class="token punctuation">.</span>name<span class="token punctuation">,</span>		<span class="token comment">-- 用户姓名</span>
	u<span class="token punctuation">.</span>age<span class="token punctuation">,</span>		<span class="token comment">-- 用户年龄</span>
	o<span class="token punctuation">.</span>number	<span class="token comment">-- 订单编号</span>
<span class="token keyword">FROM</span>
	<span class="token keyword">USER</span> u<span class="token punctuation">,</span>
	orderlist o
<span class="token keyword">WHERE</span>
	o<span class="token punctuation">.</span>uid<span class="token operator">=</span>u<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>外连接查询</strong></p><ul><li><p>左外连接</p><ul><li>查询原理 查询左表的全部数据，和左右两张表有交集部分的数据</li><li>查询语法 <code>SELECT 列名 FROM 表名1 LEFT [OUTER] JOIN 表名2 ON 条件;</code></li></ul></li><li><p>右外连接</p><ul><li>查询原理 查询右表的全部数据，和左右两张表有交集部分的数据</li><li>查询语法 <code>SELECT 列名 FROM 表名1 RIGHT [OUTER] JOIN 表名2 ON 条件;</code></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询所有用户信息，以及用户对应的订单信息</span>
<span class="token keyword">SELECT</span>
	u<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	o<span class="token punctuation">.</span>number
<span class="token keyword">FROM</span>
	<span class="token keyword">USER</span> u
<span class="token keyword">LEFT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span>
	orderlist o
<span class="token keyword">ON</span>
	u<span class="token punctuation">.</span>id<span class="token operator">=</span>o<span class="token punctuation">.</span>uid<span class="token punctuation">;</span>
	
<span class="token comment">-- 所有订单信息，以及订单所属的用户信息</span>
<span class="token keyword">SELECT</span>
	o<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	u<span class="token punctuation">.</span>name
<span class="token keyword">FROM</span>
	<span class="token keyword">USER</span> u
<span class="token keyword">RIGHT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span>
	orderlist o
<span class="token keyword">ON</span>
	u<span class="token punctuation">.</span>id<span class="token operator">=</span>o<span class="token punctuation">.</span>uid<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong>子查询</strong></p><ul><li>概念 查询语句中嵌套了查询语句，我们就将嵌套的查询称为子查询</li><li>结果是单行单列的 <ul><li>查询作用 可以将查询的结果作为另一条语句的查询条件，使用运算符判断（=、&gt;、&gt;=、&lt;、&lt;=de等）</li><li>查询语法 <code>SELECT 列名 FROM 表名 WHERE 列名=(SELECT 列名 FROM 表名 [WHERE 条件]);</code></li></ul></li><li>结果是多行单列的 <ul><li>查询作用 可以作为条件，使用运算符 IN 或 NOT IN 进行判断</li><li>查询语法 <code>SELECT 列名 FROM 表名 WHERE 列名 [NOT] IN (SELECT 列名 FROM 表名 [WHERE 条件]);</code></li></ul></li><li>结果是多行多列的 <ul><li>查询作用 查询的结果可以作为一张虚拟表参与查询</li><li>查询语法 <code>SELECT 列名 FROM 表名 [别名], (SELECT 列名 FROM 表名 [WHERE 条件] [别名] [WHERE 条件]);</code></li></ul></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询年龄最高的用户姓名</span>
<span class="token keyword">SELECT</span> NAME<span class="token punctuation">,</span>age <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">WHERE</span> age<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询张三和李四的订单信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> orderlist <span class="token keyword">WHERE</span> uid <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> id <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">WHERE</span> NAME <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询订单表中id大于4的订单信息和所属用户信息</span>
<span class="token keyword">SELECT</span>
	o<span class="token punctuation">.</span>number<span class="token punctuation">,</span>
	u<span class="token punctuation">.</span>name
<span class="token keyword">FROM</span>
	<span class="token keyword">USER</span> u
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span>
	<span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> orderlist <span class="token keyword">WHERE</span> id <span class="token operator">&gt;</span> <span class="token number">4</span><span class="token punctuation">)</span> o
<span class="token keyword">ON</span>
	u<span class="token punctuation">.</span>id<span class="token operator">=</span>o<span class="token punctuation">.</span>uid<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>自关联查询</strong></p><ul><li>概念 在同一张表中数据有关联性，我们可以把这张表当成多个表来查询</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建员工表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> employee<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 员工编号</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>			<span class="token comment">-- 员工姓名</span>
	mgr <span class="token keyword">INT</span><span class="token punctuation">,</span>				<span class="token comment">-- 上级编号</span>
	salary <span class="token keyword">DOUBLE</span>				<span class="token comment">-- 员工工资</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> employee <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span> <span class="token string">&#39;孙悟空&#39;</span><span class="token punctuation">,</span> <span class="token number">1005</span><span class="token punctuation">,</span> <span class="token number">9000.00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">1002</span><span class="token punctuation">,</span> <span class="token string">&#39;猪八戒&#39;</span><span class="token punctuation">,</span> <span class="token number">1005</span><span class="token punctuation">,</span> <span class="token number">8000.00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">1003</span><span class="token punctuation">,</span> <span class="token string">&#39;沙和尚&#39;</span><span class="token punctuation">,</span> <span class="token number">1005</span><span class="token punctuation">,</span> <span class="token number">8500.00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">1004</span><span class="token punctuation">,</span> <span class="token string">&#39;小白龙&#39;</span><span class="token punctuation">,</span> <span class="token number">1005</span><span class="token punctuation">,</span> <span class="token number">7900.00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">1005</span><span class="token punctuation">,</span> <span class="token string">&#39;唐僧&#39;</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">15000.00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">1006</span><span class="token punctuation">,</span> <span class="token string">&#39;武松&#39;</span><span class="token punctuation">,</span> <span class="token number">1009</span><span class="token punctuation">,</span> <span class="token number">7600.00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">1007</span><span class="token punctuation">,</span> <span class="token string">&#39;李逵&#39;</span><span class="token punctuation">,</span> <span class="token number">1009</span><span class="token punctuation">,</span> <span class="token number">7400.00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">1008</span><span class="token punctuation">,</span> <span class="token string">&#39;林冲&#39;</span><span class="token punctuation">,</span> <span class="token number">1009</span><span class="token punctuation">,</span> <span class="token number">8100.00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">1009</span><span class="token punctuation">,</span> <span class="token string">&#39;宋江&#39;</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">16000.00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询所有员工的姓名及其直接上级的姓名，没有上级的员工也需要查询</span>
<span class="token keyword">SELECT</span>
	e1<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
	e1<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
	e1<span class="token punctuation">.</span>mgr<span class="token punctuation">,</span>
	e2<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
	e2<span class="token punctuation">.</span>name
<span class="token keyword">FROM</span>
	employee e1
<span class="token keyword">LEFT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span>
	employee e2
<span class="token keyword">ON</span>
	e1<span class="token punctuation">.</span>mgr<span class="token operator">=</span>e2<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h4><ol><li>查询用户的编号、姓名、年龄、订单编号</li><li>查询所有的用户。用户的编号、姓名、年龄、订单编号</li><li>查询所有的订单。用户的编号、姓名、年龄、订单编号</li><li>查询用户年龄大于23岁的信息。显示用户的编号、姓名、年龄、订单编号</li><li>查询张三和李四用户的信息。显示用户的编号、姓名、年龄、订单编号</li><li>查询商品分类的编号、分类名称、分类下的商品名称</li><li>查询所有的商品分类。商品分类的编号、分类名称、分类下的商品名称</li><li>查询所有的商品信息。商品分类的编号、分类名称、分类下的商品名称</li><li>查询所有的用户和所有的商品。显示用户的编号、姓名、年龄、商品名称</li><li>查询张三和李四这两个用户可以看到的商品。显示用户的编号、姓名、年龄、商品名称</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 1.查询用户的编号、姓名、年龄、订单编号</span>
<span class="token keyword">SELECT</span> 
	u<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	o<span class="token punctuation">.</span>number 
<span class="token keyword">FROM</span> 
	<span class="token keyword">USER</span> <span class="token keyword">AS</span> u 
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> 
	orderlist <span class="token keyword">AS</span> o 
<span class="token keyword">ON</span> 
	u<span class="token punctuation">.</span>id<span class="token operator">=</span>o<span class="token punctuation">.</span>uid<span class="token punctuation">;</span>

<span class="token comment">-- 2.查询所有的用户。用户的编号、姓名、年龄、订单编号</span>
<span class="token keyword">SELECT</span>
	u<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	o<span class="token punctuation">.</span>number
<span class="token keyword">FROM</span>
	<span class="token keyword">USER</span> u
<span class="token keyword">LEFT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span>
	orderlist o
<span class="token keyword">ON</span>
	u<span class="token punctuation">.</span>id<span class="token operator">=</span>o<span class="token punctuation">.</span>uid<span class="token punctuation">;</span>

<span class="token comment">-- 3.查询所有的订单。用户的编号、姓名、年龄、订单编号</span>
<span class="token keyword">SELECT</span>
	u<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	o<span class="token punctuation">.</span>number
<span class="token keyword">FROM</span>
	<span class="token keyword">USER</span> u
<span class="token keyword">RIGHT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span>
	orderlist o
<span class="token keyword">ON</span>
	u<span class="token punctuation">.</span>id<span class="token operator">=</span>o<span class="token punctuation">.</span>uid<span class="token punctuation">;</span>

<span class="token comment">-- 4.查询用户年龄大于23岁的信息。显示用户的编号、姓名、年龄、订单编号</span>
<span class="token comment"># 方式1</span>
<span class="token keyword">SELECT</span>
	u<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	o<span class="token punctuation">.</span>number
<span class="token keyword">FROM</span>
	<span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">WHERE</span> age<span class="token operator">&gt;</span><span class="token number">23</span><span class="token punctuation">)</span> u<span class="token punctuation">,</span>
	orderlist o
<span class="token keyword">WHERE</span>
	u<span class="token punctuation">.</span>id<span class="token operator">=</span>o<span class="token punctuation">.</span>uid<span class="token punctuation">;</span>
<span class="token comment"># 方式2</span>
<span class="token keyword">SELECT</span>
	u<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	o<span class="token punctuation">.</span>number
<span class="token keyword">FROM</span>
	<span class="token keyword">USER</span> u<span class="token punctuation">,</span>
	orderlist o
<span class="token keyword">WHERE</span>
	u<span class="token punctuation">.</span>id<span class="token operator">=</span>o<span class="token punctuation">.</span>uid
	<span class="token operator">AND</span>
	u<span class="token punctuation">.</span>age <span class="token operator">&gt;</span> <span class="token number">23</span><span class="token punctuation">;</span>


<span class="token comment">-- 5.查询张三和李四用户的信息。显示用户的编号、姓名、年龄、订单编号</span>
<span class="token comment"># 方式1</span>
<span class="token keyword">SELECT</span>
	u<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	o<span class="token punctuation">.</span>number
<span class="token keyword">FROM</span>
	<span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">WHERE</span> NAME <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> u<span class="token punctuation">,</span>
	orderlist o
<span class="token keyword">WHERE</span>
	u<span class="token punctuation">.</span>id<span class="token operator">=</span>o<span class="token punctuation">.</span>uid<span class="token punctuation">;</span>
<span class="token comment"># 方式2</span>
<span class="token keyword">SELECT</span>
	u<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	o<span class="token punctuation">.</span>number
<span class="token keyword">FROM</span>
	<span class="token keyword">USER</span> u<span class="token punctuation">,</span>
	orderlist o
<span class="token keyword">WHERE</span>
	u<span class="token punctuation">.</span>id<span class="token operator">=</span>o<span class="token punctuation">.</span>uid
	<span class="token operator">AND</span>
	u<span class="token punctuation">.</span>name <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
<span class="token comment">-- 6.查询商品分类的编号、分类名称、分类下的商品名称</span>
<span class="token comment"># 方式1</span>
<span class="token keyword">SELECT</span>
	c<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
	c<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
	p<span class="token punctuation">.</span>name
<span class="token keyword">FROM</span>
	category c
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span>
	product p
<span class="token keyword">ON</span>
	c<span class="token punctuation">.</span>id<span class="token operator">=</span>p<span class="token punctuation">.</span>cid<span class="token punctuation">;</span>
<span class="token comment"># 方式2</span>
<span class="token keyword">SELECT</span>
	c<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	p<span class="token punctuation">.</span>name
<span class="token keyword">FROM</span>
	category c<span class="token punctuation">,</span>
	product p
<span class="token keyword">WHERE</span>
	c<span class="token punctuation">.</span>id<span class="token operator">=</span>p<span class="token punctuation">.</span>cid<span class="token punctuation">;</span>

<span class="token comment">-- 7.查询所有的商品分类。商品分类的编号、分类名称、分类下的商品名称</span>
<span class="token keyword">SELECT</span>
	c<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	p<span class="token punctuation">.</span>name
<span class="token keyword">FROM</span>
	category c
<span class="token keyword">LEFT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span>
	product p
<span class="token keyword">ON</span>
	c<span class="token punctuation">.</span>id<span class="token operator">=</span>p<span class="token punctuation">.</span>cid<span class="token punctuation">;</span>

<span class="token comment">-- 8.查询所有的商品信息。商品分类的编号、分类名称、分类下的商品名称</span>
<span class="token keyword">SELECT</span>
	c<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	p<span class="token punctuation">.</span>name
<span class="token keyword">FROM</span>
	category c
<span class="token keyword">RIGHT</span> <span class="token keyword">OUTER</span> <span class="token keyword">JOIN</span>
	product p
<span class="token keyword">ON</span>
	c<span class="token punctuation">.</span>id<span class="token operator">=</span>p<span class="token punctuation">.</span>cid<span class="token punctuation">;</span>

<span class="token comment">-- 9.查询所有的用户和所有的商品。显示用户的编号、姓名、年龄、商品名称</span>
<span class="token keyword">SELECT</span>
	u<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>
	p<span class="token punctuation">.</span>name
<span class="token keyword">FROM</span>
	<span class="token keyword">USER</span> u<span class="token punctuation">,</span>
	product p<span class="token punctuation">,</span>
	us_pro up
<span class="token keyword">WHERE</span>
	up<span class="token punctuation">.</span>uid<span class="token operator">=</span>u<span class="token punctuation">.</span>id
	<span class="token operator">AND</span>
	up<span class="token punctuation">.</span>pid<span class="token operator">=</span>p<span class="token punctuation">.</span>id<span class="token punctuation">;</span>

<span class="token comment">-- 10.查询张三和李四这两个用户可以看到的商品。显示用户的编号、姓名、年龄、商品名称</span>
<span class="token keyword">SELECT</span>
	u<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
	u<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
	u<span class="token punctuation">.</span>age<span class="token punctuation">,</span>
	p<span class="token punctuation">.</span>name
<span class="token keyword">FROM</span>
	<span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">USER</span> <span class="token keyword">WHERE</span> NAME <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> u<span class="token punctuation">,</span>
	product p<span class="token punctuation">,</span>
	us_pro up
<span class="token keyword">WHERE</span>
	up<span class="token punctuation">.</span>uid<span class="token operator">=</span>u<span class="token punctuation">.</span>id
	<span class="token operator">AND</span>
	up<span class="token punctuation">.</span>pid<span class="token operator">=</span>p<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h3><ul><li>视图：是一种虚拟存在的数据表，这个数据表并不在数据库中实际存在</li><li>作用：将一些较为复杂的查询语句的结果，封装到一个虚拟表中，后期再有相同需求时，直接查询该虚拟表即可</li></ul><h4 id="数据准备" tabindex="-1"><a class="header-anchor" href="#数据准备" aria-hidden="true">#</a> 数据准备</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建db5数据库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db5<span class="token punctuation">;</span>

<span class="token comment">-- 使用db5数据库</span>
<span class="token keyword">USE</span> db5<span class="token punctuation">;</span>

<span class="token comment">-- 创建country表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> country<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 国家id</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>			<span class="token comment">-- 国家名称</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> country <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;中国&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;美国&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;俄罗斯&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建city表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> city<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 城市id</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>			<span class="token comment">-- 城市名称</span>
	cid <span class="token keyword">INT</span><span class="token punctuation">,</span>				<span class="token comment">-- 外键列</span>
	<span class="token keyword">CONSTRAINT</span> cc_fk1 <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>cid<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> country<span class="token punctuation">(</span>id<span class="token punctuation">)</span>	<span class="token comment">-- 添加外键约束</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> city <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;北京&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;上海&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;纽约&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;莫斯科&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建和查询" tabindex="-1"><a class="header-anchor" href="#创建和查询" aria-hidden="true">#</a> 创建和查询</h4><ul><li>创建视图语法 <code>CREATE VIEW 视图名称 [(列表列名)] AS 查询语句;</code></li><li>查询视图语法 <code>SELECT * FROM 视图名称; </code></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建city_country视图，保存城市和国家的信息（使用指定列名）</span>
<span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> city_country <span class="token punctuation">(</span>city_id<span class="token punctuation">,</span> city_name<span class="token punctuation">,</span> country_name<span class="token punctuation">)</span> <span class="token keyword">AS</span>
<span class="token keyword">SELECT</span>
	c1<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
	c1<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
	c2<span class="token punctuation">.</span>name
<span class="token keyword">FROM</span>
	city c1<span class="token punctuation">,</span>
	country c2
<span class="token keyword">WHERE</span>
	c1<span class="token punctuation">.</span>cid<span class="token operator">=</span>c2<span class="token punctuation">.</span>id<span class="token punctuation">;</span>

<span class="token comment">-- 查询视图</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> city_country<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改和删除" tabindex="-1"><a class="header-anchor" href="#修改和删除" aria-hidden="true">#</a> 修改和删除</h4><ul><li><p>修改视图数据语法 <code>UPDATE 视图名称 SET 列名=值 WHERE 条件;</code></p></li><li><p>修改视图结构语法 <code>ALTER VIEW 视图名称 (列名列表) AS 查询语句;</code></p></li><li><p>删除视图语法 <code>DROP VIEW [IF EXISTS] 视图名称;</code></p></li></ul><blockquote><p>注意：修改视图数据后，原表数据也会随之修改</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> city_country<span class="token punctuation">;</span>
<span class="token comment">-- 修改视图数据，将北京修改为深圳</span>
<span class="token keyword">UPDATE</span> city_country <span class="token keyword">SET</span> city_name<span class="token operator">=</span><span class="token string">&#39;深圳&#39;</span> <span class="token keyword">WHERE</span> city_name<span class="token operator">=</span><span class="token string">&#39;北京&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 将视图中的country_name修改为name</span>
<span class="token keyword">ALTER</span> <span class="token keyword">VIEW</span> city_country <span class="token punctuation">(</span>city_id<span class="token punctuation">,</span> city_name<span class="token punctuation">,</span> NAME<span class="token punctuation">)</span> <span class="token keyword">AS</span>
<span class="token keyword">SELECT</span>
	c1<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
	c1<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
	c2<span class="token punctuation">.</span>name
<span class="token keyword">FROM</span>
	city c1<span class="token punctuation">,</span>
	country c2
<span class="token keyword">WHERE</span>
	c1<span class="token punctuation">.</span>cid<span class="token operator">=</span>c2<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
	
<span class="token comment">-- 删除视图</span>
<span class="token keyword">DROP</span> <span class="token keyword">VIEW</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> city_country<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库备份和恢复" tabindex="-1"><a class="header-anchor" href="#数据库备份和恢复" aria-hidden="true">#</a> 数据库备份和恢复</h3><p><strong>命令行方式</strong></p><ul><li><p>备份 登录到MySQL服务器，输入：<code>mysqldump -u root -p 数据库名称 &gt; 文件保存路径</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqldump <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> db5 <span class="token operator">&gt;</span> /root/db5.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>恢复</p><ol><li>登录MySQL数据库：<code>mysql -u root -p</code></li><li>删除已备份的数据库：<code>DROP DATABASE db5;</code></li><li>重新创建名称相同的数据库：<code>CREATE DATABASE db5;</code></li><li>使用该数据库：<code>USE db5;</code></li><li>导入文件执行：<code>source 备份文件全路径;</code></li></ol></li></ul><blockquote><p>所谓的备份，就是将一些sql语句存储起来，恢复就是执行这些sql语句，重新创建数据库中的内容</p></blockquote><p><strong>图形化界面方式</strong></p><blockquote><p>这个方法比较简单，选中需要操作的数据库右键选择备份即可 恢复的时候删除原数据库再重新创建，然后选中新建的这个数据库，右键导入即可</p></blockquote><h3 id="存储过程和函数" tabindex="-1"><a class="header-anchor" href="#存储过程和函数" aria-hidden="true">#</a> 存储过程和函数</h3><ul><li>存储过程和函数是事先经过编译并存储在数据库中的一段SQL语句的集合</li><li>存储过程和函数的好处 <ul><li>提高代码的复用性</li><li>减少数据在数据库和应用服务器之间的传输，提高效率</li><li>减少代码层面的业务处理</li></ul></li><li>存储过程和函数的区别 <ul><li>存储函数必须有返回值</li><li>存储过程可以没有返回值</li></ul></li></ul><h4 id="创建和调用" tabindex="-1"><a class="header-anchor" href="#创建和调用" aria-hidden="true">#</a> 创建和调用</h4><ul><li><p>创建存储过程</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 修改结束分隔符</span>
<span class="token keyword">DELIMITER</span> $

<span class="token comment">-- 创建存储过程</span>
<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> 存储过程名称<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token keyword">SQL</span> 语句列表<span class="token punctuation">;</span>
<span class="token keyword">END</span>$

<span class="token comment">-- 修改结束分隔符</span>
<span class="token keyword">DELIMITER</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>调用存储过程 <code>CALL 存储过程名称(实际参数);</code></p></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 数据准备</span>

<span class="token comment">-- 创建db6数据库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db6<span class="token punctuation">;</span>

<span class="token comment">-- 使用db6数据库</span>
<span class="token keyword">USE</span> db6<span class="token punctuation">;</span>

<span class="token comment">-- 创建学生表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> student<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 学生id</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>			<span class="token comment">-- 学生姓名</span>
	age <span class="token keyword">INT</span><span class="token punctuation">,</span>				<span class="token comment">-- 学生年龄</span>
	gender <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>			<span class="token comment">-- 学生性别</span>
	score <span class="token keyword">INT</span> 				<span class="token comment">-- 学生成绩</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> student <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
<span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;赵六&#39;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">-- 按照性别进行分组，查询每组学生的总成绩。按照总成绩的升序排序</span>
<span class="token keyword">SELECT</span> gender<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span> getsum <span class="token keyword">FROM</span> student <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> gender <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> getsum <span class="token keyword">ASC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建stu_group() 存储过程，封装 分组查询总成绩，并按照总成绩升序排序的功能</span>
<span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> stu_group<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token keyword">SELECT</span> gender<span class="token punctuation">,</span><span class="token function">SUM</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span> getsum <span class="token keyword">FROM</span> student <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> gender <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> getsum <span class="token keyword">ASC</span><span class="token punctuation">;</span>
<span class="token keyword">END</span>$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

<span class="token comment">-- 调用存储过程</span>
<span class="token keyword">CALL</span> stu_group<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看和删除" tabindex="-1"><a class="header-anchor" href="#查看和删除" aria-hidden="true">#</a> 查看和删除</h4><ul><li>查看数据库中所有的存储过程 <code>SELECT * FROM mysql.proc WHERE db=&#39;数据库名称&#39;;</code></li><li>删除存储过程 <code>DROP PROCEDURE [IF EXISTS] 存储过程名称;</code></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查看db6数据库中所有的存储过程</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> mysql<span class="token punctuation">.</span><span class="token keyword">proc</span> <span class="token keyword">WHERE</span> db<span class="token operator">=</span><span class="token string">&#39;db6&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除存储过程</span>
<span class="token keyword">DROP</span> <span class="token keyword">PROCEDURE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> stu_group<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h4><ul><li>定义变量 <code>DECLARE 变量名 数据类型 [DEFAULT 默认值];</code></li><li>变量赋值方式一 <code>SET 变量名=变量值;</code></li><li>变量赋值方式二 <code>SELECT 列名 INTO 变量名 FROM 表名 [WHERE 条件];</code></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 定义一个int类型变量，并赋默认值为10</span>
<span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> pro_test1<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token comment">-- 定义变量</span>
	<span class="token keyword">DECLARE</span> num <span class="token keyword">INT</span> <span class="token keyword">DEFAULT</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token comment">-- 使用变量</span>
	<span class="token keyword">SELECT</span> num<span class="token punctuation">;</span>
<span class="token keyword">END</span>$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

<span class="token comment">-- 调用pro_test1存储过程</span>
<span class="token keyword">CALL</span> pro_test1<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/*
	变量赋值
*/</span>

<span class="token comment">-- 定义一个varchar类型变量并赋值</span>
<span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> pro_test2<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token comment">-- 定义变量</span>
	<span class="token keyword">DECLARE</span> NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">-- 为变量赋值</span>
	<span class="token keyword">SET</span> NAME <span class="token operator">=</span> <span class="token string">&#39;存储过程&#39;</span><span class="token punctuation">;</span>
	<span class="token comment">-- 使用变量</span>
	<span class="token keyword">SELECT</span> NAME<span class="token punctuation">;</span>
<span class="token keyword">END</span>$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

<span class="token comment">-- 调用pro_test2存储过程</span>
<span class="token keyword">CALL</span> pro_test2<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">-- 定义两个int类型的变量，用于存储男女同学的总分数</span>
<span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> pro_test3<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token comment">-- 定义两个变量</span>
	<span class="token keyword">DECLARE</span> men<span class="token punctuation">,</span>women <span class="token keyword">INT</span><span class="token punctuation">;</span>
	<span class="token comment">-- 为变量赋值</span>
	<span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span> <span class="token keyword">INTO</span> men <span class="token keyword">FROM</span> student <span class="token keyword">WHERE</span> gender <span class="token operator">=</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span> <span class="token keyword">INTO</span> women <span class="token keyword">FROM</span> student <span class="token keyword">WHERE</span> gender <span class="token operator">=</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">;</span>
	<span class="token comment">-- 使用变量</span>
	<span class="token keyword">SELECT</span> men<span class="token punctuation">,</span>women<span class="token punctuation">;</span>
<span class="token keyword">END</span>$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

<span class="token comment">-- 调用pro_test3</span>
<span class="token keyword">CALL</span> pro_test3<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="if语句" tabindex="-1"><a class="header-anchor" href="#if语句" aria-hidden="true">#</a> if语句</h4><ul><li><p>if语句标准语法</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">IF</span> 判断条件<span class="token number">1</span> <span class="token keyword">THEN</span> 执行的<span class="token keyword">sql</span>语句<span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token keyword">ELSEIF</span> 判断条件<span class="token number">2</span> <span class="token keyword">THEN</span> 执行的<span class="token keyword">sql</span>语句<span class="token number">2</span><span class="token punctuation">;</span><span class="token punctuation">]</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">[</span><span class="token keyword">ELSE</span> 执行的<span class="token keyword">sql</span>语句n<span class="token punctuation">;</span><span class="token punctuation">]</span>
<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*
	定义一个int类型的变量，用于存储班级总成绩
	定义一个varchar变量，用于存储分数描述
	根据总成绩判断：
		380分以上	学习优秀
		320~380		学习不错
		320以下		学习一般
*/</span>

<span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> pro_test4<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token comment">-- 定义变量</span>
	<span class="token keyword">DECLARE</span> total <span class="token keyword">INT</span><span class="token punctuation">;</span>
	<span class="token keyword">DECLARE</span> info <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">-- 查询班级总成绩为total赋值</span>
	<span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span> <span class="token keyword">INTO</span> total <span class="token keyword">FROM</span> student<span class="token punctuation">;</span>
	<span class="token comment">-- 判断</span>
	<span class="token keyword">IF</span> total <span class="token operator">&gt;=</span> <span class="token number">380</span> <span class="token keyword">THEN</span>
		<span class="token keyword">SET</span> info <span class="token operator">=</span> <span class="token string">&#39;学习优秀&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">ELSEIF</span> total <span class="token operator">BETWEEN</span> <span class="token number">320</span> <span class="token operator">AND</span> <span class="token number">380</span> <span class="token keyword">THEN</span> 
		<span class="token keyword">SET</span> info <span class="token operator">=</span> <span class="token string">&#39;学习不错&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">ELSE</span>
		<span class="token keyword">SET</span> info <span class="token operator">=</span> <span class="token string">&#39;学习一般&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
	<span class="token comment">-- 使用变量</span>
	<span class="token keyword">SELECT</span> total<span class="token punctuation">,</span>info<span class="token punctuation">;</span>
<span class="token keyword">END</span>$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

<span class="token comment">-- 调用pro_test4</span>
<span class="token keyword">CALL</span> pro_test4<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参数传递" tabindex="-1"><a class="header-anchor" href="#参数传递" aria-hidden="true">#</a> 参数传递</h4><ul><li><p>存储过程的参数和返回值</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> 存储过程名称<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">IN</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token keyword">OUT</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token keyword">INOUT</span><span class="token punctuation">]</span> 参数名 数据类型<span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token keyword">SQL</span>语句列表<span class="token punctuation">;</span>
<span class="token keyword">END</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>IN：代表输入参数，需要由调用者传递实际数据（默认） OUT：代表输出参数，该参数可以作为返回值 INOUT：代表既可以作为输入参数，也可以作为输出参数</p></blockquote></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*
	输入总成绩变量，代表学生总成绩
	输出分数描述变量，代表学生总成绩的描述信息
	根据总成绩判断
		380分及以上	学习优秀
		320~380		学习不错
		320分及以下	学习一般
*/</span>

<span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> pro_test5<span class="token punctuation">(</span><span class="token operator">IN</span> total <span class="token keyword">INT</span><span class="token punctuation">,</span><span class="token keyword">OUT</span> info <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token comment">-- 对总成绩判断</span>
	<span class="token keyword">IF</span> total <span class="token operator">&gt;=</span> <span class="token number">380</span> <span class="token keyword">THEN</span>
		<span class="token keyword">SET</span> info <span class="token operator">=</span> <span class="token string">&#39;学习优秀&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">ELSEIF</span> total <span class="token operator">BETWEEN</span> <span class="token number">320</span> <span class="token operator">AND</span> <span class="token number">380</span> <span class="token keyword">THEN</span>
		<span class="token keyword">SET</span> info <span class="token operator">=</span> <span class="token string">&#39;学习不错&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">ELSE</span>
		<span class="token keyword">SET</span> INFO <span class="token operator">=</span> <span class="token string">&#39;学习一般&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
<span class="token keyword">END</span>$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

<span class="token comment">-- 调用存储过程</span>
<span class="token keyword">CALL</span> pro_test5<span class="token punctuation">(</span><span class="token number">383</span><span class="token punctuation">,</span> <span class="token variable">@info</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CALL</span> pro_test5<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span> <span class="token keyword">FROM</span> student<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">@info</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token variable">@info</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="while循环" tabindex="-1"><a class="header-anchor" href="#while循环" aria-hidden="true">#</a> while循环</h4><ul><li><p>while 循环语法</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>初始化语句<span class="token punctuation">;</span>
<span class="token keyword">WHILE</span> 条件判断语句 <span class="token keyword">DO</span>
	循环体语句<span class="token punctuation">;</span>
	条件控制语句<span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token keyword">WHILE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 计算1~100之间的偶数和</span>

<span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> pro_test6<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
	<span class="token comment">-- 定义求和变量</span>
	<span class="token keyword">DECLARE</span> result <span class="token keyword">INT</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">-- 定义初始化变量</span>
	<span class="token keyword">DECLARE</span> num <span class="token keyword">INT</span> <span class="token keyword">DEFAULT</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token comment">-- while 循环</span>
	<span class="token keyword">WHILE</span> num <span class="token operator">&lt;=</span> <span class="token number">100</span> <span class="token keyword">DO</span>
		<span class="token keyword">IF</span> num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">THEN</span>
			<span class="token keyword">SET</span> result <span class="token operator">=</span> result <span class="token operator">+</span> num<span class="token punctuation">;</span>
		<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
		
		<span class="token keyword">SET</span> num <span class="token operator">=</span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">END</span> <span class="token keyword">WHILE</span><span class="token punctuation">;</span>
	<span class="token comment">-- 查询求和结果</span>
	<span class="token keyword">SELECT</span> result<span class="token punctuation">;</span>
<span class="token keyword">END</span>$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

<span class="token comment">-- 调用存储过程</span>
<span class="token keyword">CALL</span> pro_test6<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="存储函数" tabindex="-1"><a class="header-anchor" href="#存储函数" aria-hidden="true">#</a> 存储函数</h4><ul><li><p>存储函数和存储过程是非常相似的，区别在于存储函数必须有返回值</p></li><li><p>创建存储函数</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> 函数名称<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span>
<span class="token keyword">RETURNS</span> 返回值类型
<span class="token keyword">BEGIN</span>
		<span class="token keyword">SQL</span>语句列表<span class="token punctuation">;</span>
		<span class="token keyword">RETURN</span> 结果<span class="token punctuation">;</span>
<span class="token keyword">END</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>调用存储函数 <code>SELECT 函数名称(实际参数);</code></p></li><li><p>删除函数 <code>DROP FUNCTION 函数名称;</code></p></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 定义存储函数，获取学生表中成绩大于95分的学生数量</span>
<span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> fun_test<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">RETURNS</span> <span class="token keyword">INT</span>
<span class="token keyword">BEGIN</span>
	<span class="token comment">-- 定义变量</span>
	<span class="token keyword">DECLARE</span> s_count <span class="token keyword">INT</span><span class="token punctuation">;</span>
	<span class="token comment">-- 查询数量并赋值</span>
	<span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">INTO</span> s_count <span class="token keyword">FROM</span> student <span class="token keyword">WHERE</span> score <span class="token operator">&gt;</span> <span class="token number">95</span><span class="token punctuation">;</span>
	<span class="token comment">-- 返回</span>
	<span class="token keyword">RETURN</span> s_count<span class="token punctuation">;</span>
<span class="token keyword">END</span>$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

<span class="token comment">-- 调用函数</span>
<span class="token keyword">SELECT</span> fun_test<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除函数</span>
<span class="token keyword">DROP</span> <span class="token keyword">FUNCTION</span> fun_test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="触发器" tabindex="-1"><a class="header-anchor" href="#触发器" aria-hidden="true">#</a> 触发器</h3><ul><li><p>触发器是与表有关的数据库对象，可以在insert、update、delete 之前或之后触发并执行触发器中定义的SQL语句</p></li><li><p>这种特性可以协助应用系统在数据库端确保数据的完整性、日志记录、数据校验等操作</p></li><li><p>可以使用别名 <code>NEW</code> 或者 <code>OLD</code>来引用触发器中发生变化的内容记录</p></li><li><p>触发器分类</p></li></ul><table><thead><tr><th>触发器类型</th><th>OLD</th><th>NEW</th></tr></thead><tbody><tr><td>INSERT 型触发器</td><td>无（因为插入前无数据）</td><td>NEW表示将要或者已经新增的数据</td></tr><tr><td>UPDATE 型触发器</td><td>OLD表示修改之前的数据</td><td>NEW表示将要或已经修改后的数据</td></tr><tr><td>DELETE 型触发器</td><td>OLD表示将要或者已经删除的数据</td><td>无（因为删除后状态无数据）</td></tr></tbody></table><h4 id="触发器的操作" tabindex="-1"><a class="header-anchor" href="#触发器的操作" aria-hidden="true">#</a> 触发器的操作</h4><ul><li><p>创建触发器</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> 触发器名称
BEFORE<span class="token operator">|</span><span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span><span class="token operator">|</span><span class="token keyword">UPDATE</span><span class="token operator">|</span><span class="token keyword">DELETE</span>
<span class="token keyword">ON</span> 表名
<span class="token keyword">FOR EACH ROW</span>
<span class="token keyword">BEGIN</span>
	触发器要执行的功能
<span class="token keyword">END</span>$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>数据准备</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建db7数据库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db7<span class="token punctuation">;</span>

<span class="token comment">-- 使用db7数据库</span>
<span class="token keyword">USE</span> db7<span class="token punctuation">;</span>

<span class="token comment">-- 创建账户表account</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> account<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 账户id</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>			<span class="token comment">-- 姓名</span>
	money <span class="token keyword">DOUBLE</span>				<span class="token comment">-- 余额</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> account <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 创建日志表account_log</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> account_log<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 日志id</span>
	operation <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>			<span class="token comment">-- 操作类型 (insert update delete)</span>
	operation_time <span class="token keyword">DATETIME</span><span class="token punctuation">,</span>		<span class="token comment">-- 操作时间</span>
	operation_id <span class="token keyword">INT</span><span class="token punctuation">,</span>			<span class="token comment">-- 操作表的id</span>
	operation_param <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>		<span class="token comment">-- 操作参数</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>INSERT 型触发器</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建insert型触发器，用于对account表新增数据进行日志的记录</span>
<span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> account_insert
<span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span>
<span class="token keyword">ON</span> account
<span class="token keyword">FOR EACH ROW</span>
<span class="token keyword">BEGIN</span>
	<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> account_log <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;INSERT&#39;</span><span class="token punctuation">,</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> new<span class="token punctuation">.</span>id<span class="token punctuation">,</span> CONCAT<span class="token punctuation">(</span><span class="token string">&#39;插入后{id=&#39;</span><span class="token punctuation">,</span>new<span class="token punctuation">.</span>id<span class="token punctuation">,</span><span class="token string">&#39;,name=&#39;</span><span class="token punctuation">,</span>new<span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token string">&#39;,money=&#39;</span><span class="token punctuation">,</span>new<span class="token punctuation">.</span>money<span class="token punctuation">,</span><span class="token string">&#39;}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span>$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

<span class="token comment">-- 向account表添加一条数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> account <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询account表</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> account<span class="token punctuation">;</span>

<span class="token comment">-- 查询account_log表</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> account_log<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>UPDATE 型触发器</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建update型触发器，用于对account表修改数据进行日志记录</span>
<span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> account_update
<span class="token keyword">AFTER</span> <span class="token keyword">UPDATE</span>
<span class="token keyword">ON</span> account
<span class="token keyword">FOR EACH ROW</span>
<span class="token keyword">BEGIN</span>
	<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> account_log <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;UPDATE&#39;</span><span class="token punctuation">,</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> new<span class="token punctuation">.</span>id<span class="token punctuation">,</span> CONCAT<span class="token punctuation">(</span><span class="token string">&#39;更新前{id=&#39;</span><span class="token punctuation">,</span>old<span class="token punctuation">.</span>id<span class="token punctuation">,</span><span class="token string">&#39;,name=&#39;</span><span class="token punctuation">,</span>old<span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token string">&#39;,money=&#39;</span><span class="token punctuation">,</span>old<span class="token punctuation">.</span>money<span class="token punctuation">,</span><span class="token string">&#39;}&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;更新后{id=&#39;</span><span class="token punctuation">,</span>new<span class="token punctuation">.</span>id<span class="token punctuation">,</span><span class="token string">&#39;,name=&#39;</span><span class="token punctuation">,</span>new<span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token string">&#39;,money=&#39;</span><span class="token punctuation">,</span>new<span class="token punctuation">.</span>money<span class="token punctuation">,</span><span class="token string">&#39;}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span>$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

<span class="token comment">-- 修改account表中李四的金额为2000</span>
<span class="token keyword">UPDATE</span> account <span class="token keyword">SET</span> money <span class="token operator">=</span> <span class="token number">2000</span> <span class="token keyword">WHERE</span> NAME <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询account表</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> account<span class="token punctuation">;</span>

<span class="token comment">-- 查询account_log表</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> account_log<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>DELETE 型触发器</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建delete型触发器，用于对account表删除的数据进行日志的记录</span>
<span class="token keyword">DELIMITER</span> $

<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> account_delete
<span class="token keyword">AFTER</span> <span class="token keyword">DELETE</span>
<span class="token keyword">ON</span> account
<span class="token keyword">FOR EACH ROW</span>
<span class="token keyword">BEGIN</span>
	<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> account_log <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;DELETE&#39;</span><span class="token punctuation">,</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> old<span class="token punctuation">.</span>id<span class="token punctuation">,</span> CONCAT<span class="token punctuation">(</span><span class="token string">&#39;删除前{id=&#39;</span><span class="token punctuation">,</span>old<span class="token punctuation">.</span>id<span class="token punctuation">,</span><span class="token string">&#39;,name=&#39;</span><span class="token punctuation">,</span>old<span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token string">&#39;,money=&#39;</span><span class="token punctuation">,</span>old<span class="token punctuation">.</span>money<span class="token punctuation">,</span><span class="token string">&#39;}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span>$

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

<span class="token comment">-- 删除account表中王五</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> account <span class="token keyword">WHERE</span> NAME <span class="token operator">=</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询account表</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> account<span class="token punctuation">;</span>

<span class="token comment">-- 查询account_log表</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> account_log<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="查看和删除-1" tabindex="-1"><a class="header-anchor" href="#查看和删除-1" aria-hidden="true">#</a> 查看和删除</h4><ul><li>查看触发器 <code>SHOW TRIGGERS;</code></li><li>删除触发器 <code>DROP TRIGGER 触发器名称;</code></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查看触发器</span>
<span class="token keyword">SHOW</span> TRIGGERS<span class="token punctuation">;</span>

<span class="token comment">-- 删除account_delete触发器</span>
<span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> account_delete<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h3><blockquote><p>事务：一条或多条SQL语句组成一个执行单元，其特点是这个单元要么同时成功要么同时失败 单元中的每条SQL语句都相互依赖，形成一个整体 如果某条SQL语句失败或者出现错误，那么这个单元就会撤回到事务最初的状态 如果单元中所有的SQL语句都执行成功，则事务就顺利执行</p></blockquote><h4 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h4><ul><li>开启事务 <code>START TRANSACTION;</code></li><li>回滚事务 <code>ROLLBACK;</code></li><li>提交事务 <code>COMMIT;</code></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建db8数据库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db8<span class="token punctuation">;</span>

<span class="token comment">-- 使用db8数据库</span>
<span class="token keyword">USE</span> db8<span class="token punctuation">;</span>

<span class="token comment">-- 创建账户表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> account<span class="token punctuation">(</span>
	id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>	<span class="token comment">-- 账户id</span>
	NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>			<span class="token comment">-- 账户名称</span>
	money <span class="token keyword">DOUBLE</span>				<span class="token comment">-- 账户余额</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> account <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 张三给李四转账500元</span>

<span class="token comment">-- 开启事务</span>
<span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span>

<span class="token comment">-- 1. 张三账户-500</span>
<span class="token keyword">UPDATE</span> account <span class="token keyword">SET</span> money <span class="token operator">=</span> money <span class="token operator">-</span> <span class="token number">500</span> <span class="token keyword">WHERE</span> NAME <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">;</span>

出错了<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token comment">-- 2.李四账户+500</span>
<span class="token keyword">UPDATE</span> account <span class="token keyword">SET</span> money <span class="token operator">=</span> money <span class="token operator">+</span> <span class="token number">500</span> <span class="token keyword">WHERE</span> NAME <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 回滚事务</span>
<span class="token keyword">ROLLBACK</span><span class="token punctuation">;</span>

<span class="token comment">-- 提交事务</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="提交方式" tabindex="-1"><a class="header-anchor" href="#提交方式" aria-hidden="true">#</a> 提交方式</h4><ul><li><p>事务提交方式</p><ul><li>自动提交（MySQL默认）</li><li>手动提交</li></ul></li><li><p>查看事务提交方式 <code>SELECT @@AUTOCOMMIT;</code></p><blockquote><p>0代表手动提交 1代表自动提交</p></blockquote></li><li><p>修改事务提交方式 <code>SET @@AUTOCOMMIT = 数字;</code></p></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询事务提交方式</span>
<span class="token keyword">SELECT</span> @<span class="token variable">@autocommit</span><span class="token punctuation">;</span>

<span class="token comment">-- 修改事务提交方式</span>
<span class="token keyword">SET</span> @<span class="token variable">@autocommit</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">UPDATE</span> account <span class="token keyword">SET</span> money <span class="token operator">=</span> <span class="token number">2000</span> <span class="token keyword">WHERE</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">-- 临时修改，并未提交</span>

<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="四大特征-acid" tabindex="-1"><a class="header-anchor" href="#四大特征-acid" aria-hidden="true">#</a> 四大特征(ACID)</h4><ul><li>原子性(Atomicty) 原子性指事物包含的所有操作要么全部成功，要么全部失败回滚 因此事务的操作如果成功就必须要完全应用到数据库，如果操作失败则不能对数据库有任何影响</li><li>一致性(Consistency) 一致性是指事务必须使数据库从一个一致性状态变换到另一个一致性状态 也就是说一个事务执行之前和执行之后都必须处于一致性状态</li><li>隔离性(Isolcation) 隔离性是当多个用户并发访问数据库时，比如操作同一张表时，数据库为每一个用户开启的事务 不能被其他事务的操作所干扰，多个并发事务之间要相互隔离</li><li>持久性(Durability) 持久性是指一个事务一旦提交了，那么对数据库中的数据的改变就是永久性的 即便是在数据库系统遇到故障的情况下也不会丢失提交事务的操作</li></ul><h4 id="隔离级别" tabindex="-1"><a class="header-anchor" href="#隔离级别" aria-hidden="true">#</a> 隔离级别</h4><ul><li><p>事务的隔离级别 多个客户端操作时，各个客户端的事务之间应该是隔离的，相互独立的，不受影响的 而如果多个事务操作同一批数据时，就会产生不同的问题，我们需要设置不同的隔离级别来解决这些问题</p></li><li><p>隔离级别分类</p><table><thead><tr><th>隔离级别</th><th>名称</th><th>会引发的问题</th></tr></thead><tbody><tr><td>read uncommitted</td><td>读未提交</td><td>脏读、不可重复读、幻读</td></tr><tr><td>read committed</td><td>读已提交</td><td>不可重复读、幻读</td></tr><tr><td>repeatable read</td><td>可重复读</td><td>幻读</td></tr><tr><td>serializable</td><td>串行化</td><td>无</td></tr></tbody></table></li><li><p>引发的问题</p><table><thead><tr><th>问题</th><th>现象</th></tr></thead><tbody><tr><td>脏读</td><td>在一个事务处理过程中读取到了另一个未提交事务中的数据，导致两次查询结果不一致</td></tr><tr><td>不可重复读</td><td>在一个事务处理过程中读取到了另一个事务中修改并已提交的数据，导致两次查询不一致</td></tr><tr><td>幻读</td><td>查询某数据不存在，准备插入此纪录，但执行插入时发现此纪录已存在，无法插入。或者查询数据不存在执行删除操作，却发现删除成功</td></tr></tbody></table></li><li><p>查询数据库隔离级别 <code>SELECT @@TX_ISOLATION;</code></p></li><li><p>修改数据库隔离级别 <code>SET GLOBAL TRANSACTION ISOLATION LEVEL 级别字符串;</code></p></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询事务隔离级别</span>
<span class="token keyword">SELECT</span> @<span class="token variable">@tx_isolation</span><span class="token punctuation">;</span>

<span class="token comment">-- 修改事务隔离级别（修改后需要重新连接）</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> <span class="token keyword">TRANSACTION</span> <span class="token keyword">ISOLATION</span> <span class="token keyword">LEVEL</span> <span class="token keyword">READ</span> <span class="token keyword">COMMITTED</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>总结</p><table><thead><tr><th>序号</th><th>隔离级别</th><th>名称</th><th>脏读</th><th>不可重复读</th><th>幻读</th><th>数据库默认隔离级别</th></tr></thead><tbody><tr><td>1</td><td>read uncommitted</td><td>读未提交</td><td>是</td><td>是</td><td>是</td><td></td></tr><tr><td>2</td><td>read committed</td><td>读已提交</td><td>否</td><td>是</td><td>是</td><td>Oracle</td></tr><tr><td>3</td><td>repeatable read</td><td>可重复读</td><td>否</td><td>否</td><td>是</td><td>MySQL</td></tr><tr><td>4</td><td>serializable</td><td>串行化</td><td>否</td><td>否</td><td>否</td><td></td></tr></tbody></table><p><strong>注意</strong> ：隔离级别从小到大安全性越来越高，但是效率越来越低，所以不建议修改数据库默认的隔离级别</p></li></ul>`,175),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","sql.html.vue"]]);export{k as default};
