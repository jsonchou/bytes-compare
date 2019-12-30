<a name="parse"></a>

## parse ⇒ <code>Boolean</code>
<p>bytes compare</p>

**Kind**: global variable  
**Returns**: <code>Boolean</code> - <p>compare result</p>  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | <p>num</p> |
| pattern | <code>String</code> | <p>pattern</p> |

**Example**  
```js
compare(1024, ">=1024KB")
=> true


compare(1024 * 1024, ">=1024MB")
=> true


compare(1024 * 1024 * 1024, ">=1024GB")
=> true

```
