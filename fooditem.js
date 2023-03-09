const foodItem= [
    {
        id: 1,
        name: 'Teh Poci ori',
        category : 'Kantin Fadillah',
        rating : 4.3,
        price: 5000,
        img: 'data:image/jpeg;base64,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',
        quantity: 1
    },
    {
    id: 1,
    name: 'Teh Poci ori',
    category : 'biryani',
    rating : 4.3,
    price: 5000,
    img: 'data:image/jpeg;base64,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',
    quantity: 1
},
{
    id: 2,
    name: 'Teh Poci Milo',
    category : 'biryani',
    rating : 4.3,
    price: 8000,
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUSGBgYGBgYGBgYGBIYGBkYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzQlJCsxNDQ0MTExNDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAEIQAAIBAgQCBwUECQMDBQAAAAECAAMRBBIhMUFRBRMiYXGBkQYyUqGxQpLB0RQVM1NicsLh8IKi8QeD0hYjVGSy/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EADARAAICAQMCBQIFBAMAAAAAAAABAhEDEiExBEEFEyIyURRhQlJxkaEVI1OBM8Hw/9oADAMBAAIRAxEAPwAzSjSzGVMMWiko0uYNjIWUeDaXMoZCFDOGdaVMhLOSpMKlJjsrHwBnWwNS9sjSWiWgEZoVbTj4FxupHofpOfoz6Wsb8iCdOYG0CUIzVMkcqi+RlsZacTFFjA/oL3AK6na5UfWETB1AA2Xsk2Butib2sDfnM8+kjpaSGx6palbGQ8sDKVMBV0ARr68hsATa++hhEw7hcxU22vpbjx47H0nGzdFOKtI6MOrhJ1aOXhqbQXUvwVvQ8r/TWSgj3IKMLG2oIiodLNxcq4GS6jHdJoZJnLwVRrazqNcTO8M16mtg1ki9rOO0awjaxNxGcKdZ6TpHeBHLzf8AIzYG0SHvR1doiT2oP4idjUw0LVW4gsMYW8kuSGZVUjaJVWmpibTLxDRmNgSiD6ySL9ZJHgHCJUy7QZjACpg2hDBmQhUiatChSsOwGP1MyXlqNYqQQToR9ZUk3wC433PSU8IlvcTyUaQ6UMuq9m3IkfScxGMsOwLDgbazDxHSTkkZm075mc6HRwWbtVS2rszHvN/rEsRiKaDUt4Ar+Uwq+Lc7s3qYm7EwJZdh0enXc2K3SG2UkW87/lC4XpZPtKPHXWYGs6IqORpjXgg1wenPSVFtCiHxsfrOrjMNxSn91J5bPOCpGrMwH00H2PYrWwx+xS8LJOnF4c6FKduVwRy5zx3WzvWwvOYP0sfg9nSfD3BUWI27bm3gpa3ykqIGfN1jhbklANGzAe9rt7xt/EZ43rfH5yy4g8z85fmsp9HjZ7CuVYWGW2pFwSbka3vvte/1vouyICWJFhmsBtY3tpxsDp4CeaXEH4j6mXVydzKln2qkD9DDVdv9zWzKzZiy2vcLlA3/AM2vH6Qo5SRcPuoucrHlfW395gKhtpGsEpOh2uJIZW3ppUSXSqCbi3f3Z6anhmannXUa5h9pSN7gcO+ZDntxyiLDTSJVh2hAdati4J6dzTwzy9RrRbDNC1jpBmHHkRr1pmV6kcxEz6svCw8kaQPNJB3kmoz7DbShl2Eo0dQplDKGXlWlFAmgjDuIFpZDUw9bMgvw09IpiFF99d5bCN2T4ytdpinGpM343cROoIG8NVMUdovSMC57SrVe+Ks8rnl6UWFepBmpBM0peVpCGM8srGAQwyGXRC95YNOCdkogVGjVF4msZpmTSirNXDkcvnDYbfzieGeN4cxkIrdmfNLsa9NtIliD2hGqR0ieJ3ivxALgcwrQ9ZophWhqxkycFx9yEcQZm1THq7TPrGVg5H5uAV5JS8k2mU0GlGl2gzHMz0VMqZYyrQSA2g2EI0G0hAuGO8HVMtQOp8IlXc3OszZI3JjlmUIqyO0VczrVOcpmHG+x2tvbTfheKqjVCakrQCo0oGnXlISWwZ0mSckEuiwsuhgrwiSmQOplwYFTCrBLsIsLTglhqchVNjlCP0DM+kI2jWj4LYy5rUlZso2kTxG8rTrd8jvF+XuCpB6BtD1W0mX18J+kSpx2GQXqJXMzqxjNZ4lVeBhVMZlewO87BZpJqsy7ms0oZcykaJKGVMIZQyEAtKMIVoNpCHKZ18jEq+8dQaiJ4jeKl7hef2piVSCzQlY6ReBJGjpJPSWJlN9p28thj2xFy2Rui7ZOrb4T6Gc6tvhb0mic1ud2tfKvu+Sm3jYwhJu11FhexsL+6vd37xWt1YzSZgRvhb0MKiHkfQzRp07mw5X8ucsji5HLw29frKU5uOqi1GzPGm+kuphMcwuPCAQw4W1bAewcNHKQ0iAjyRiQ/Cu41TkZ7SJtA4gx0ODD1b/uf6DpWjHWXmQj6zQpG8tmeLOkzoMsUlkpwJLYapFHidSP1REasXFblzlaAXklpI0SazShMsZQzQJsqTKmdMq0oso5g2l3MGxkIdQ6iLYsamFU6yYlLxOR00H5XmRaMmty5wBjdVIs1MnaKckxuLE4AiZ2i9mBlKhVfedR3DtH5Q+Aoq5vZsvC9hfyF9JTWrZD1NJjq02f3b+PaA9TGqOCY7uvkCZutigipo1slsosAdBvecps+ROqte/aAy799+G/ygrp1xYTmzPw1ADTOuqkX1G/CJ9QUZma2psNQdON+XCehRhnqFLZ8otbn9q3yhMNnLoXyXyH+bgO1w48O+M0enTYSytHjca4LC3KUUxrpOggZmuRqSQBmG++94qiXF1KsOam5Hiu4gRjpVFSkm+QisbeGsfpmI0zpaMYduBPhCH4pJDymAxLQtMXlalIxsfac/PLVkbEk3mphhFkoTRw6SxSCBZadlWMGRYKu0zKrax6u0zXOsWiMvmkg7yQyGvmlSZ0iVMeKKkypaRoNmksh1jBmQmVJksh28tiNoK8NX2HhEZjRg5Zm1RE8T+zf/SP9wjtSJYv9m/+j/8AUQPlwxfC9CVnYAIQDbUlV03vYm8ext6SsBYFNByBBtNcJVdabUy/uAtla3vKhF9eV4jicKjUnqVWcKrAHLqxYst7k95E1IyGNXx1TqkbMQSxuRpe17Rh+kHV0W+jBb6b5pfFYFVyICWRQX1tqCSAtx3nfkIpjx26ZA07IB59r8JVq6L1P5PTHA1DTDq6AsOzmDaegmTiqWJoA1GqKwuAbEm9zbYqIaniHSopOYoEIClja7HcDyi+JpvXrvTLsqLZiCWKqAF+ze257uMJNMmt/I3Sq5wG5j/BM/pvo04arlzA3GdSLiwJIt6gzZwXRqoiuj50LgXNuJG1uF7zQ9peiDXcMroGVLBTqTqSL66C5teXRVuzz9FyyIzG5NwTxNmNr+VoynO0UwWqJYb5j6sfymtgsMWOo0Bsee0xTnGNtm2HtCJoCORPyNpe4itVsrEDgSJxa01Q3imY5v1MdWFDxJKsury2ChsPOloBDCGJlIZQDEGZrnWPYhpmu2skXZTCXkg80kMo9EVg2WHYQTzSIFqkWaOOIs6QWg0UE4wlgsjSFFLRnTqyP4CfAqb/AEi0aw4vlHO6nwNx+MTm4NGD3GVWimI9x/AH0YRyqsWPEH7SsO7UaX87TM3sapLY1MM1TqqRTPfIoOW+wVbXA34wmGeyOKiEoxysSBox3zKfL/DMHC4rEUSpVmZBpYEOtuQB93ytNyh0jqxdQyvYkDa4AFwDfkPQTVGSa2Mck0ZuJ6P6lylyVcApck2ybqDy1+srhsNmXtA9l7qOd7H0veV9qMWXKEXVVzW53NtdPATaw9PKi5tOyNL2G27Ne5bwPrBkt7Akji0czqQpuBbW1ybjW1/GJYGmHfFAqWu1io0JADaA3048ZoYbHIr3NyADqBxuNvnrMjoXHhMTVYhijlzawvo3ZPzOnfChstykbWCqgolNKYVA6XN76lxb1PjxjeLq2r1D8NK/plaLYnpQEpkSyq4cg2GYg3tpcef5TCxeOrVajunZVwEY6BcoFrZjz7oTmlyEotlMA+RUO+Uf1MfxnocANMx3ftnz2AmBYCwBBsFF+BsBcjzvNfDVAii975FsDbjc6Tm9Rj1K0bYqoiVVrsx7z9ZFlSb698ss6UFUUjC+QywyCBSM0llSLXIZElmlkEjCZXyOQhiRM90N5sPTvFXoQ4gtCOWSOdRJCsrSbbCCcRxkgmSazMKFJw0o31chpygkZz04BxNKqkSqJKILGGRrKDyMoVlgezaKze0dgfqFsetnfxv97tD6xGqhtmtpe1++1/8APCegSgGdXPFV9RcE/KdxeELCxAYd+kRFalZuaXdnk3PI+k1ejaq5P/c1XXVrdkXHHf8A5mfiaBV8ovqez58/OHxKAJl1sOXG17fPWS0pUBpVOx8oh+x3ix9N5GpId2fzsZhUMU6bHTkdRHE6U5p6GGJcTSXDp8TeQEslFAb5WPiQL+Nol+tksLJtzOvyEDiMUzi4NhxA0Et/qRQQ1isao7KKt+LAXt3AmKZidyTC1MIFXNe5uPrY/UQVJb3N7W+vKAknwMUdJYTRrOGJI2sAPBQBFKNMhlOhF/8ANDGzTyll5aefGRxVq+SnLdr7C9pYSxWVAmmzIGSM04skYQwZcFxGc06rQF5ZIlxG2MhbzjUxOIYQmVRVg+rkl5JdF2aLiCeNmg3Iyv6KeRgvr8H5kK8qXwIsZRnjzYFjwgz0e3Iyn4jgX4kX5UvgQdos81z0c3IwZ6LblK/qOD8yL8mfwYzJIV0M2x0O/dFekMAaagm2ukW/EMOT0RatjMeKUZW0JYdyFB5Ej8fxjr4hbXv5TNFQBbc208QBOPUNrw4S07M11GWz7COMqBWBO4uR4/lM+jiC11fW+vhHMSL2a+pi1KgFUsRfiPLhDtPkBptv/wBsKYhbMQuw+vH5ygQ78OcOiDdjZb/OOUkQrZdRxsb/ADhNlKK/QzFj2AQMSG7jbhOPhlOisCeVwZMI2Vx33U/54iU90RLSxrHVDbKBpexPfy8I90VgUdQ7NcDTKNLfzH5xapoWB2YDyOv94ghI42I3h41XYTrbk4t7m5iXUugQDKtgLchcsZW+YsebE/OZ+ErjO1/so3qbfhebXs7heuvc2su/fe0VnyRxrzJbJBRi3dCZpmRaR5T1A6A/jHoZF6FsecyR8WwPuB5EjzyYcxlMOeU9CnRQEKvR4EJ+KYPknkyMBcKeUuuEM9EuCWXXCLAfieH5L8mR5wULSdUZ6Q9HqZU9GiWvEsL7l+VI831JnZ6H9WiST+o4vknlyAnFt8D+hk/TH+BvSXPS9D4/kZU9MUPiPoZwPpM3+P8Ak6NS/KVOKf4G9DOHFP8AA3pHcBiUrEhGPZFySLD1hSAFZmICqLkwHgyKSi8e743FvJUqa3Ms4qr+7Mn6RV/dmdPT1Dm3pLYfpmk7Kq57sbDSM+jz/wCNfuNamlbiU/SK37s/OIdMO7J20ygHf1np3p2bLe8wPaTFoL0RcsCDfS0PpMM3ltRSp7sUp601FHlaq9k8w1/UWlK1UFbC2ba3GSu1r+XyMElRbg9+/lPSR9rdWYcstMrT52Yq9IjQm+smLFhbhLYh+1cTtw+hvK3dM0Y0kqQnjRmQFdgdYtRw4IuSYwrlDqNDuPDlzjFPIRcW033Fr841SpUTSnK2JYWgesAHDW/dHsaVGUi2YG+ndOPilGiWJ8NP7yuHwxc3NwOJ5+El3uykktluMY6tkKONRsRzU6/n6xfpCgGIdNQQNuR4ydK11CimupW1+6w0HeYLo6qT2Dtw/wA84WOPcydS9L1IZVLI7cSLH5DSep9kKL5CyW5G/iTMB07DW5T2XsgmWif5h8h/eYPF56endfYb01r1fJoBK3NZYUqnEiOI99te/S3rLopb3bkc/s+s87h6bqMq9MVX7Gt5GjN6iodAR84RMNUG5+RjhAQ3LC54LYzMx2KqfZLel50oeFtRubp/ZBwcpukM9U/xCFp4dyQMwExqeLq8VJt3GP0Mc/FXHhrFPw3Kp+lpr7oZPHJLajdp9FNxeWq9GaaNDdGYkuPzBBncTUYX0058J2H0sI49ops5rnNTpsz/ANAPxSQnXj4l9RJMX08/yDdUjxZxOG/+O/3p1cThybDDub/xQ56TxX7n/Y/5zU6Mr1GQvWVV1sqgMrE8zrN8skYq2zZOemN/9jC0UpoFRchexYDUg8rzK9p8YEQUV3btP4cBNJGIDVCC1gbKLkk8hPIYzD13dnanUuxv7rekydO9cnml32S+EL6WKlPVJ8fPyZ5Mc6KxPVVBUylst7DvItvKfq6t+7qfdaer6NodTh1XZ21bmONvS00ZMsIRcm+DodR1MFCub7CP/qUhs3Utz1Y2+k8/XxBeozndje09j0gW/R3ChmZ+yANSATYn0nkD0fVXtMjgDUkjYd8HC4aFKO17tGfDLHpk0qfHIlXW+gmdVJBtNLZ78jf0hcXQR1LC18pOnGw0vNeORys2DXuuTCfEa2yjTvnEdgQ3C9u7v0h6WCvq3Hh/ecx65QijYX/CTUrpDowlGKb2JUN9Dsdj+IhKdBApGuu8DgEuD3EWHiNfpGAhvvKbV0i4N999ztHCqNR6nWWxWIKDKPeI300Hd3yVahVCRuPziDodCdS2vnKgpOW/BU56duBR6R3sd9+fnGMCCGv3RkhstrWtbj9BK4c6nw/FZob0oxNLJFj9OrwsdZ63omsqYexvqWuACSb988lhqRdjbgCfQT6B7JdIqFFBwBuUJtrfUg98RlhDKkpDukU4Rbq0gWAwlStlCjIg0zMTcjuHGeoTCAIFLXAFr6Q/Vp8K+gnQi/CvoJohjUVSJl6hzfwjz+NRAbXX1iRpJve/dmM1uksML3AAvyAmYUtFzRswTTjyAqOBsi/7jFxVcnRF9PzjxMXxNPMP7RTTNcZLij0Hs+GtdlUGPYvNmsLWtxtaYPQOJymx4bianSFYMbrHxfpOflxvzitm5U/QfnJM7O3dJJYflfcCZQmedpYCo7EulQDkqqv1IAmqH6tPcRFHFnFz6A3PnPH5Onr0xlbHSwpbJ2x2cJmC3SNaoxSnbxC2Nu8km3jDUehrdp2Zm3sDbXvbc/KT6bQv7kq+yI8KivU6NczhMzXpnYYe/ezofmbmJL0M7NmYqgJvlW5t3CRYYU7kUsUatujdvBV0DKy8wR6yBLAAcBaDYxEdpbMTVHksSpViOV4ocRY8fKO9JXVypBvqb9x2mVVv4z1mH1QT+wGqmNjFoeNvEGVrOjgjMuveJmM/C0p1ojVjoN5dhvB1wg1G517rAa/Mx8rfUcZidas7nEvy97AjJxdmpivcPl9YGjTAAOYXsN2UWuOV4l1glhUEZH0g5o+Yvg0Q68WHlr9IEDtaa/8AN4urRmiJUpNi8eBQ4NLC1W2GgPLc+c9O/RwFNHVi4sDnU01UHldrHfSeb6PTtrw1Gtr279jPSq5V86V0udweqVW/mUsvqBFKULptfuasbcXa2NboXp69qVUjNsrXUhhwBykgNPR9bPFPUpObOBTc7EMj0yeeYXtHaWKqYcWbt0+DZtQP4WIAI7vnHxmuE7FZsKlvHZ/HyemdQwsZi47DZT3c+1HMD0ilUXRwbbjiPEcIzUUMNfqw+hhtKQiMpY3ueaJtOq8exWEYahQR/wB5v6zEHuu6qPJ/xinGjfDKpI0OjsOjNqL7cBNDE0QLazGwLsSAtteFrfUGbdTCta5PAct/QQ48CpyanbYtp/hkg7Nyb0EklBal8iedeY9RFKuBpObsLnvd/wA55EqJW087Hwpx3U2jpR6Jrh0e2pU0QZVCgd1vnzljbmJ4bL3Tipc2AueQF5H4S5O3Jv8A0VLoo8yke4JHMfKVLLzHqJ5ej0LXf3aNTzXKPVrR2n7J4lt0RfFl/C8teCv8wmWHBHmaNglfiX1EEzJ8SfeWJL7G4jnR+8//AIwi+xdY7vSH3j/SIa8GfyxbXTrmYLH4WlUFmen3HMoInm8X0Va5WpRbl20U+l7fOesHsRU/e0/utOH2Ff8AfJ9xvzmzB0OXFspbfBVdL3n/AAfN6zFDY6/McftDSDFRD6cNRf8ACfSW9g3/AHyfcb84Gp/0/c/boHxVh+Bm9Ka5QMo9M/bP+D50pG4OxllW+xE923/T2r/9Y+BP4rE63sPiE2oqw/hKH5aGW9S7FRwYpcZEeUVJMyjdl9Zr1+hWT36LL/MhA8iRBDCKPsj0gObXY1Q6DVxJP9BGm4O1z4AzWweGBsS9NfE3PoPzghS7pcLEZJOSpOjQvDY92eo6MbD09qiFviv/AJaaR6QpfGnrPEqI2u05k/D9UtTk7KfQRXdnqRjKPx0/lIK9IC6uq/ykAfd2PpPLrDqdI2PQOG8ZMD6OK7s0q9amGU5h3uhcOv8ApJIPlbwmpgPaGwysS9jbMcqnzFtZ5ejhmc5UR2P8IJt48pt4P2ZrkXIVP5mH9N50MPmRVc/cTmw4EqkzdxHTlMAZCr89WW3+0zNr9Jq/2FH/AHKn0CS6ey7/AGnQeAZvraNJ7LL9qox8FUfW8dWRmRfTw4dmbTxqpqCoO3v1D/RNXB9L3NtD4dY5+gjND2Xp8S58SB9BNHD9BUk4E9xOkKMZIXky4XxYH9ZHl8mkmh+raP7un91fykh1IR5kPg+OSSSTKetONPe+y/7NfASSR2I5/W+09Aux8Z2SSaEefycnRIZJJYosJUSSSFkE7JJIyI6s7JJKCiK4z3T4T5V0j+0f+YySRGTg73hvLE5BJJMbO4EWMrsJJJBczoh+B8JJIwzy4Z7v2b/Yr5fSbMkk1w4PM9T7mQTskkPuZRnD7QxkkkIckkklkP/Z',
    quantity: 1
},
{
    id: 3,
    name: 'Teh Poci susu',
    category : 'biryani',
    rating : 4.3,
    price: 8000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XzzZ9k4wueALW-T0V-CjKru-w_TcqNe-SQ&usqp=CAU',
    quantity: 1
},
{
    id: 7,
    name: 'Donat',
    category : 'biryani',
    rating : 4.3,
    price: 4000,
    img: 'https://elrajab.com/wp-content/uploads/2018/08/cara-membuat-donat-kentang-manis.jpg',
    quantity: 1
},
{
    id: 8,
    name: 'Sari Roti',
    category : 'biryani',
    rating : 4.3,
    price: 3000,
    img: 'https://dxclnrbvyw82b.cloudfront.net/images/product/web/65/15/72/00/0/000000721565_01_800.jpg',
    quantity: 1
},
{
    id: 9,
    name: 'Gorengan',
    category : 'biryani',
    rating : 4.3,
    price: 1000,
    img: 'https://tse3.mm.bing.net/th?id=OIP.lcc_9WZjog3bgy1WzQV5fAHaFN&pid=Api&P=0',
    quantity: 1
},
{
    id: 10,
    name: 'Kentang Goreng',
    category : 'chicken',
    rating : 4.5,
    price: 10000,
    img: 'https://aromarasa.com/wp-content/uploads/2021/07/resep-kentang-goreng-crispy-ala-mcd-sederhana-1024x756.jpg',
    quantity: 1
},
{
    id: 11,
    name: 'Jalangkote',
    category : 'chicken',
    rating : 4.3,
    price: 1000,
    img: 'https://thumb.viva.co.id/media/frontend/thumbs3/2020/05/18/5ec2a9fa593b7-jalangkote_665_374.jpg',
    quantity: 1
},
{
    id: 12,
    name: 'Nasi Goreng',
    category : 'chicken',
    rating : 4.3,
    price: 12000,
    img: 'https://assets-pergikuliner.com/DZXcVRhudWuey8jUeHjhQh5j_a4=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/image/picture/270/picture-1409716541.jpg',
    quantity: 1
},
{
    id: 16,
    name: 'indomie Goreng',
    category : 'paneer',
    rating : 4.3,
    price: 5000,
    img: 'https://img-global.cpcdn.com/recipes/7e38e0d2e557c00f/751x532cq70/indomie-goreng-telor-foto-resep-utama.jpg',
    quantity: 1

},
{
    id: 17,
    name: 'Indomie Kaldu',
    category : 'paneer',
    rating : 4.3,
    price: 5000,
    img: 'https://s3.bukalapak.com/img/8493564301/w-1000/Jual_Indomie_rasa_kaldu_ayam_1_kardus_isi_40.jpg',
    quantity: 1
},
{
    id: 18,
    name: 'indomie Soto',
    category : 'paneer',
    rating : 4.3,
    price: 5000,
    img: 'https://s3.amazonaws.com/images.ecwid.com/images/28679550/1790572951.jpg',
    quantity: 1

},
{
    id: 19,
    name: 'indomie rendang',
    category : 'paneer',
    rating : 4.3,
    price: 5000,
    img: 'https://tse2.mm.bing.net/th?id=OIP.oxTNVJPd0PAqJPPMxwrG8QHaHa&pid=Api&P=0',
    quantity: 1

},  
{
    id: 23,
    name: 'Pop Ice',
    category : 'vegetable',
    rating : 4.3,
    price: 5000 ,
    img: 'https://tse4.mm.bing.net/th?id=OIP.MzuttWtI1czA-rxO79v9ZQAAAA&pid=Api&P=0',
    quantity: 1
},
{
    id: 24,
    name: 'Milo',
    category : 'vegetable',
    rating : 4.3,
    price: 5000,
    img: 'https://tse2.mm.bing.net/th?id=OIP.7BV2wGZBuxiAzca2BVtjlQAAAA&pid=Api&P=0',
    quantity: 1
},
{
    id: 25,
    name: 'Zee',
    category : 'vegetable',
    rating : 4.3,
    price: 6000,
    img: 'https://s3.bukalapak.com/img/349634964/w-1000/Susu_Zee_Swiss_Chocolate_10_x_40_gr.jpg',
    quantity: 1
},
{
    id: 26,
    name: 'Hilo',
    category : 'vegetable',
    rating : 4.3,
    price: 5000,
    img: 'https://cf.shopee.co.id/file/18d01ce2ff2cbf5ed29b5da459540b0e',
    quantity: 1
},
{
    id: 27,
    name: 'Fanta Float',
    category : 'vegetable',
    rating : 4.3,
    price: 10000,
    img: 'https://img-global.cpcdn.com/recipes/7462c198a15b57b5/680x482cq70/merdeka-fanta-float-resipi-foto-utama.jpg',
    quantity: 1
},
{
    id: 27,
    name: 'Air Mineral',
    category : 'vegetable',
    rating : 4.3,
    price: 5000,
    img: 'https://s4.bukalapak.com/img/9659898502/w-1000/aqua.jpg',
    quantity: 1
},
{
    id: 30,
    name: 'Kopi',
    category : 'chinese',
    rating : 4.3,
    price: 15000,
    img: 'https://cdn4.uzone.id/assets/uploads/feeding/resep-es-kopi-sehat-dan-kekinian.jpg/800',
    quantity: 1
},
{
    id: 31,
    name: 'Batagor',
    category : 'chinese',
    rating : 4.3,
    price: 10000,
    img: 'https://live.staticflickr.com/4064/4313266810_df9cc4389b_b.jpg',
    quantity: 1
},
{
    id: 32,
    name: 'Kebab',
    category : 'chinese',
    rating : 4.3,
    price: 10000,
    img: 'https://tse1.mm.bing.net/th?id=OIP.jljyNvxbOl-1DhQ2aZ3D4AHaHa&pid=Api&P=0',
    quantity: 1
},
{
    id: 42,
    name: 'Bakso',
    category : 'south indian',
    rating : 4.3,
    price: 15000,
    img: 'https://4.bp.blogspot.com/-lVM70hxEo1E/Ukzq0L4bhAI/AAAAAAAAAZo/khUxmZ1Uo1s/s1600/bakso+malang.JPG',
    quantity: 1
},
{
    id: 43,
    name: 'Ice Cream',
    category : 'south indian',
    rating : 4.3,
    price: 10000,
    img: 'https://tse4.mm.bing.net/th?id=OIP.TcQ0vEAye_t8lWFhKNopQQHaEo&pid=Api&P=0',
    quantity: 1
},
{
    id: 44,
    name: 'Mie Bakso Spesial',
    category : 'south indian',
    rating : 4.3,
    price: 15000,
    img: 'https://2.bp.blogspot.com/-mqzCG3yMgQE/U-au_DsA5qI/AAAAAAAAAy4/_9icGhwFS2k/s1600/Resep+Mie+Ayam+Bakso.jpg',
    quantity: 1
},
]

export {foodItem};