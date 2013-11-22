if [ -z "$1" ]; then
    echo "Usage: $0 module_name ..."
    echo "Listing available modules:"
fi

MODLIST=""
LAST_ID=""

while read prefix arg args; do
    if [ "$prefix" = "Module" ]; then
        LAST_ID="${arg:1}"
    elif [ "$prefix" = "Name:" -a -n "$LAST_ID" ]; then
        if [ -z "$1" ]; then
            echo "Found module: $LAST_ID ($arg)"
            LAST_ID=""
        else
            case $arg in
            $1)
                # echo "Module $LAST_ID ($arg) matches, will unload."
                MODLIST="$LAST_ID $MODLIST"
                LAST_ID=""
                ;;
            esac
        fi
    fi
done < <( pactl list )

if [ -n "$1" ]; then
    for id in $MODLIST; do
        echo "pactl unload-module $id"
        pactl unload-module $id
    done
fi
