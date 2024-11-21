#!/bin/bash
cd "$(dirname "$0")"

gitRes=$(git pull);
expectedRes="Already up to date."

if [ "$gitRes" != "$expectedRes" ]; then

echo $gitRes

chown -R www-data:www-data ./

/usr/bin/systemctl restart meinleben

echo "Updated meinleben service @ $(date)"
/usr/bin/systemctl status meinleben
echo ""
fi

